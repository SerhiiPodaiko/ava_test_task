import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useGlobalSearchStore } from '@store/globalSearch/useGlobalSearchStore'
import { PAGE_SLUGS } from '@constants/pages'

export const useGlobalSearch = () => {
  const [query, setQuery] = useState<string>('')
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const globalSearchStore = useGlobalSearchStore()

  const homePath = pathname === PAGE_SLUGS.home

  const queryParams = searchParams?.get('search')

  const handleSearch = () => {
    if (!homePath) return

    globalSearchStore.setSearchQuery(query)
    router.push(`${PAGE_SLUGS.home}?search=${query}`)

    if (query === '') {
      router.push(PAGE_SLUGS.home)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch()
  }

  useEffect(() => {
    if (queryParams) {
      globalSearchStore.setSearchQuery(queryParams)
      setQuery(queryParams)
    }
  }, [queryParams])

  return {
    homePath,
    query,
    setQuery,
    handleSearch,
    handleSubmit
  }
}

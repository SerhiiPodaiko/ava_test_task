import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'

import { useAuthStore } from '@store/auth/useAuthStore'
import { IRegisterUser as IFormRegisterInput, ILoginUser as IFormLoginInput } from '@store/auth/models'
import { PAGE_SLUGS } from '@constants/pages'

export const useAuth = () => {
  const router = useRouter()
  const authStore = useAuthStore()

  const onLoginSubmit: SubmitHandler<IFormLoginInput> = data => authStore.setLogin(data)


  const onRegisterSubmit: SubmitHandler<IFormRegisterInput> = data => authStore.setRegister(data)

  useEffect(() => {
    if (authStore.isLoggedIn) {
      router.push(PAGE_SLUGS.home)
    }
  }, [authStore.isLoggedIn])


  return {
    onLoginSubmit,
    onRegisterSubmit
  }
}

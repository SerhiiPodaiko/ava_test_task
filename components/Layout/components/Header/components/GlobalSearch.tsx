import cn from 'classnames'

import { useGlobalSearch } from '@hooks/useGlobalSearch'
import SearchSvg from '@public/icons/search.svg'

const GlobalSearch = () => {
  const { query, setQuery, handleSubmit, handleSearch, homePath } = useGlobalSearch()

  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <SearchSvg onClick={handleSearch} className='absolute left-[10px] top-[12px] cursor-pointer' />
        <input
          disabled={!homePath}
          type='search'
          className={cn(
            'sm:min-w-[360px] sm:w-full pr-2 pl-[40px] py-4 right-[20px] bg-[#F1F1F1] text-[#626262] sm:text-[#626262] placeholder:text-[#626262] leading-[18px] font-medium rounded-[4px]',
            !homePath && 'opacity-50'
          )}
          placeholder='Search for products or brands.....'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  )
}

export default GlobalSearch

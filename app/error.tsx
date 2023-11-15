'use client'
import { useEffect } from 'react'
import ErrorSvg from '@public/icons/404/error.svg'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {

    useEffect(() => {
        console.error('Error client', error)
    }, [error])

  return (
    <section className='p-5 border border-red-600 bg-red-400 text-white rounded'>
      <div className='flex items-center justify-between'>
        <div>
          <h2>Opps, Error</h2>
          {error && <p>{error.message}</p>}
        </div>
        <ErrorSvg />
      </div>
      <button className='py-2 px-3 font-medium bg-red-600 text-white rounded' onClick={() => reset()}>
        Try again
      </button>
    </section>
  )
}

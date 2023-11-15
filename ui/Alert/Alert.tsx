import cn from 'classnames'

const AlertUI = ({ children, title, className }: { children: React.ReactNode; title: string; className?: string }) => {
  return (
    <div className={cn('p-5 w-full flex flex-col border rounded', className)}>
      <p className='font-bold'>{title}</p>
      <p className='text-sm'>{children}</p>
    </div>
  )
}

export default AlertUI

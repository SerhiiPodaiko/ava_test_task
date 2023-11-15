import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonUI = ({ count = 1, className }: { count?: number; className?: string }) => (
  <Skeleton count={count} className={className} />
)

export default SkeletonUI

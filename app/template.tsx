'use client'
import { motion } from 'framer-motion'

export default function Template({ children, pathname }: { children: React.ReactNode; pathname: string }) {
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, x: -200, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  )
}

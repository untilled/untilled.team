import { FC, PropsWithChildren } from 'react'

import { motion } from 'framer-motion'

export type AnimatedPageProps = PropsWithChildren<unknown>

export const AnimatedPage: FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      key="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

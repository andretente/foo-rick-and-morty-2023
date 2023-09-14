import { ReactNode } from 'react'

export interface CardGridItemProps {
  as?: 'div' | 'li'
  children: ReactNode
  className?: string
}

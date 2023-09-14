import './card-grid-item.css'

import clsx from 'clsx'

import type { CardGridItemProps } from './CardGridItem.types'

export default function CardGridItem({
  as = 'div',
  children,
  className,
}: CardGridItemProps) {
  const Component = as

  return (
    <Component className={clsx('card-grid-item', className)}>
      {children}
    </Component>
  )
}

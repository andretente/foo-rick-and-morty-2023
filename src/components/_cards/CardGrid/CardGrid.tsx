import './card-grid.css'

import type { CardGridProps } from './CardGrid.types'

export default function CardGrid({ as = 'div', children }: CardGridProps) {
  const Component = as

  return <Component className="card-grid">{children}</Component>
}

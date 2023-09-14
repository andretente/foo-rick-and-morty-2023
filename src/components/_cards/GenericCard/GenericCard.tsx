import './generic-card.css'

import BaseImage from '@components/_images/BaseImage'

import type { GenericCardProps } from './GenericCard.types'

export default function GenericCard({
  as = 'div',
  imageSrc,
  name,
}: GenericCardProps) {
  const Component = as

  return (
    <Component className="generic-card">
      <BaseImage height={200} src={imageSrc} width={200} />

      <span className="generic-card__content-title">{name}</span>
    </Component>
  )
}

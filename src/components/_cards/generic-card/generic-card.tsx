import BaseImage from '@components/_images/base-image'
import clsx from 'clsx'

import css from './generic-card.module.css'
import type { GenericCardProps } from './generic-card.types'

export default function GenericCard({
  as = 'div',
  imageSrc,
  name,
}: GenericCardProps) {
  const Component = as

  return (
    <Component className={clsx('cluster', css['card'])}>
      <span className={css['image-wrapper']}>
        <BaseImage
          className={css['image']}
          height={200}
          src={imageSrc}
          width={200}
        />
      </span>

      <span className={clsx(css['title'])}>{name}</span>
    </Component>
  )
}

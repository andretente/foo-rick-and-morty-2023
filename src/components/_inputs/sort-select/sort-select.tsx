import clsx from 'clsx'
import { ChangeEvent, memo } from 'react'

import css from './sort-select.module.css'
import type { SortSelectProps } from './sort-select.types'

const SortSelect = memo(function SortSelect({ onChange }: SortSelectProps) {
  // console.log('👷 render sort 👷')

  return (
    <label className={clsx('cluster', css['root'])}>
      <span className={css['label']}>Sort:</span>

      <select
        className={css['select']}
        name="sorting"
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          onChange(event.target.value)
        }
      >
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </label>
  )
})

export default SortSelect

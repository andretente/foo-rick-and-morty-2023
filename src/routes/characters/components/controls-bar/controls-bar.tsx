import SearchForm from '@components/_inputs/search-form'
import SortSelect from '@components/_inputs/sort-select'
import clsx from 'clsx'

import css from './controls-bar.module.css'
import type { ControlsBarProps } from './controls-bar.types'

export default function ControlsBar({
  onChangeSearch,
  onSubmitSearch,
  onChangeSort,
}: ControlsBarProps) {
  return (
    <div className={clsx('cluster', css['root'])}>
      <SearchForm onChange={onChangeSearch} onSubmit={onSubmitSearch} />

      <SortSelect onChange={onChangeSort} />
    </div>
  )
}

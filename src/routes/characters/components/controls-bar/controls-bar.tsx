import SearchForm from '@components/_inputs/SearchForm'
import SortSelect from '@components/_inputs/SortSelect'

import css from './controls-bar.module.css'
import type { ControlsBarProps } from './controls-bar.types'

export default function ControlsBar({
  onChangeSearch,
  onSubmitSearch,
  onChangeSort,
}: ControlsBarProps) {
  return (
    <div className={css['root']}>
      <SearchForm
        className={css['search-form']}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />

      <SortSelect className={css['sort-select']} onChange={onChangeSort} />
    </div>
  )
}

import './controls-bar.css'

import SearchForm from '@components/_inputs/SearchForm'
import SortSelect from '@components/_inputs/SortSelect'

import type { ControlsBarProps } from './ControlsBar.types'

export default function ControlsBar({
  onChangeSearch,
  onSubmitSearch,
  onChangeSort,
}: ControlsBarProps) {
  return (
    <div className="controls-bar">
      <SearchForm
        className="controls-bar__search-form"
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />

      <SortSelect
        className="controls-bar__sort-select"
        onChange={onChangeSort}
      />
    </div>
  )
}

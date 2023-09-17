import clsx from 'clsx'
import { FormEvent, memo, useEffect, useRef } from 'react'

import css from './search-form.module.css'
import type { SearchFormProps } from './search-form.types'

// ! WARNING: This is a very contrived, memo added for demo purposes
const SearchForm = memo(function SearchForm({
  onChange,
  onSubmit,
}: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const search = event.currentTarget.search.value

    onSubmit?.(search)
  }

  function onChangeHandler(event: FormEvent<HTMLFormElement>) {
    const search = event.currentTarget.search.value

    onChange?.(search)
  }

  return (
    <form
      className={clsx('cluster', css['root'])}
      onSubmit={onSubmitHandler}
      onChange={onChangeHandler}
    >
      <label className={clsx('cluster', css['label'])}>
        <span>Search:</span>

        <input
          ref={inputRef}
          className={css['input']}
          autoComplete="off"
          type="text"
          name="search"
        />
      </label>

      <button className={css['button']} type="submit">
        Go!
      </button>
    </form>
  )
})

export default SearchForm

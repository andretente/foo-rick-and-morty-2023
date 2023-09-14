import './search-form.css'

import { FormEvent, memo, useEffect, useRef } from 'react'

import type { SearchFormProps } from './SearchForm.types'

// ! WARNING: This is a very contrived, memo added for demo purposes
export default memo(function SearchForm({
  className,
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
      className={className}
      onSubmit={onSubmitHandler}
      onChange={onChangeHandler}
    >
      <label>
        <span className="search-form__label">Search:</span>

        <input
          ref={inputRef}
          className="search-form__input"
          autoComplete="off"
          type="text"
          name="search"
        />
      </label>

      <button className="search-form__button" type="submit">
        Go!
      </button>
    </form>
  )
})

import css from './error-message.module.css'
import type { ErrorMessageProps } from './error-message.types'

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className={css['root']}>
      <h1 className={css['title']}>Sorry, something went wrong!</h1>

      <p>{error}</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={css['icon']}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  )
}

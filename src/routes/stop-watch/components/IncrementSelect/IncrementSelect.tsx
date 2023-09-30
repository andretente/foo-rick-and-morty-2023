import { ChangeEventHandler } from 'react'

export default function IncrementSelect({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined
}) {
  return (
    <select onChange={onChange}>
      <option value="1">1</option>
      <option value="10">10</option>
      <option value="100">100</option>
    </select>
  )
}

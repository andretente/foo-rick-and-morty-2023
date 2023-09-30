import { memo } from 'react'

const IncreaseButton = memo(function IncreaseButton({
  onClick,
}: {
  onClick: () => void
}) {
  return <button onClick={onClick}>IncreaseButton</button>
})

export default IncreaseButton

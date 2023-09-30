import { memo } from 'react'

const ResetButton = memo(function ResetButton({
  onClick,
}: {
  onClick: () => void
}) {
  console.log('👷 render reset button 👷')
  return <button onClick={onClick}>ResetButton</button>
})

export default ResetButton

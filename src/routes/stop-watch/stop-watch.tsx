import clsx from 'clsx'
import { useCallback, useState } from 'react'

import CounterValue from './components/ConterValue'
import IncreaseButton from './components/IncreaseButton'
import IncrementSelect from './components/IncrementSelect'
import ResetButton from './components/ResetButton'
import css from './stop-watch.module.css'

export default function StopWatch() {
  const [counterValue, setCounterValue] = useState(0)
  const [incrementValue, setIncrementValue] = useState(1)

  function onClickButtonHandler() {
    setCounterValue(counterValue + incrementValue)
  }

  const onClickReset = useCallback(() => {
    setCounterValue(0)
  }, [])

  return (
    <div className={clsx('grid', css['stop-watch'])}>
      <CounterValue value={String(counterValue)} />

      <IncreaseButton onClick={onClickButtonHandler} />

      <ResetButton onClick={onClickReset} />

      <IncrementSelect
        onChange={(event) => {
          setIncrementValue(Number(event.currentTarget.value))
        }}
      />
    </div>
  )
}

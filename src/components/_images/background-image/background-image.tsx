import bgImage from '@assets/ryck-morty-bg.png'
import { useLocation } from 'react-router-dom'

import css from './background-image.module.css'

export default function BackgroundImage() {
  const location = useLocation()

  return (
    <img
      className={css['root']}
      src={bgImage}
      alt=""
      style={{ opacity: location.pathname === '/' ? 0.7 : 0.1 }}
    />
  )
}

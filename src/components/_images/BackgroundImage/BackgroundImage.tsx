import './background-image.css'

import bgImage from '@assets/ryck-morty-bg.webp'
import { useLocation } from 'react-router-dom'

export default function BackgroundImage() {
  const location = useLocation()

  return (
    <img
      className="background-image"
      src={bgImage}
      alt=""
      style={{ opacity: location.pathname === '/' ? 0.7 : 0.1 }}
    />
  )
}

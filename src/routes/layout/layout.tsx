import BackgroundImage from '@components/_images/background-image'
import clsx from 'clsx'
import { useLayoutEffect, useRef } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import css from './layout.module.css'
import ThemeToggle from './theme-toggle/theme-toggle'

export default function Layout() {
  const location = useLocation()

  const navigationItems = [
    { to: '/', label: 'Home' },
    { to: '/characters', label: 'Characters' },
    { to: '/episodes', label: 'Episodes' },
  ]

  const navRef = useRef<HTMLElement>(null)
  const underlineRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const activeElement = navRef.current?.querySelector('.active')
    const dimensions = activeElement?.getBoundingClientRect()

    if (underlineRef.current && dimensions) {
      underlineRef.current.style.left = `${dimensions?.left}px`
      underlineRef.current.style.top = `${dimensions?.bottom}px`
      underlineRef.current.style.width = `${dimensions?.width}px`
    }
  }, [location.pathname])

  return (
    <>
      <header className={clsx(css['header'])}>
        <nav className={clsx('cluster', css['navigation'])} ref={navRef}>
          {navigationItems.map((navigationItem) => {
            return (
              <NavLink
                key={navigationItem.to}
                className={css['navigation-link']}
                end
                to={navigationItem.to}
              >
                {navigationItem.label}
              </NavLink>
            )
          })}

          <span ref={underlineRef} className={css['navigation-underline']} />
        </nav>

        <ThemeToggle className={css['theme-toggle']} />
      </header>

      <BackgroundImage />

      <main
        className={clsx(
          css['main'],
          location.pathname === '/' && css['main--is-home']
        )}
      >
        <Outlet />
      </main>
    </>
  )
}

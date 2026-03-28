import React from 'react'
import navbarSearchIconUrl from '../assets/navbar-search-icon.svg'

type NavbarSearchProps = {
  /** Mobile menu: full-width row */
  fullWidth?: boolean
}

/**
 * Navbar-only search field: flat (#F3F4F7), no border/shadow/focus ring.
 * Uses `src/assets/navbar-search-icon.svg`.
 */
const NavbarSearch: React.FC<NavbarSearchProps> = ({ fullWidth }) => {
  return (
    <div
      className={
        fullWidth
          ? 'relative min-w-0 w-full'
          : 'relative hidden min-w-0 laptop-sm:block'
      }
    >
      <img
        src={navbarSearchIconUrl}
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 select-none object-contain"
        style={{ opacity: 0.72 }}
      />
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        className={[
          'navbar-search-field h-10 border-0 py-0 pl-10 pr-4 tracking-normal bg-[#F6F9FF]',
          fullWidth ? 'w-full' : 'w-[clamp(140px,28vw,260px)] shrink',
        ].join(' ')}
      />
    </div>
  )
}

export default NavbarSearch

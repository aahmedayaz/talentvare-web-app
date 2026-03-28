import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import userAvatarUrl from '../assets/avatar.svg'
import NavbarSearch from './NavbarSearch'

type NavItem = {
  label: string
  to: string
  exact?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Find Jobs', to: '/', exact: true },
  { label: 'Top Companies', to: '/top-companies' },
  { label: 'Job Tracker', to: '/job-tracker' },
  { label: 'My Calendar', to: '/calendar' },
  { label: 'Documents', to: '/documents' },
  { label: 'Messages', to: '/messages' },
  { label: 'Notifications', to: '/notifications' },
]

const linkBase =
  'navbar-nav-link relative cursor-pointer transition-colors duration-300 outline-none rounded-sm'

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const MenuIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={[className || '', 'h-5 w-5'].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )

  const CloseIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={[className || '', 'h-5 w-5'].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )

  const Item = ({ item }: { item: NavItem }) => (
    <NavLink
      to={item.to}
      end={item.exact}
      className={({ isActive }) =>
        [
          linkBase,
          'whitespace-nowrap tracking-normal',
          isActive ? 'text-[#0154AA]' : 'text-[#737A91] hover:text-[#0154AA]',
        ].join(' ')
      }
      onClick={() => setOpen(false)}
    >
      {item.label}
    </NavLink>
  )

  return (
    <header className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-3 tablet:px-6 tablet-lg:px-[50px]">
        <div className="flex items-center justify-between gap-3 py-3">
          {/* Left: Logo + Nav */}
          <div className="flex min-w-0 items-center gap-3 laptop-sm:gap-4 laptop-lg:gap-5">
            <button
              onClick={() => navigate('/')}
              className="group flex shrink-0 items-center cursor-pointer"
              aria-label="Talentvare home"
              type="button"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-[38.449px] w-[41.085px] shrink-0 object-contain group-hover:scale-105 transition-transform"
              />
            </button>

            <nav className="hidden tablet:flex min-w-0 items-center gap-2 tablet:gap-3 laptop-sm:gap-4 laptop-lg:gap-[25px] ml-2">
              {NAV_ITEMS.map((it) => (
                <Item key={it.label} item={it} />
              ))}
            </nav>
          </div>

          {/* Right: Search, CTA, Avatar (tablet and up) */}
          <div className="hidden tablet:flex min-w-0 shrink-0 items-center gap-4">
            <NavbarSearch />
            <button
              onClick={() => navigate('/resume-builder')}
              className="navbar-resume-btn hidden laptop-sm:inline-flex h-10 shrink-0 cursor-pointer items-center justify-center bg-[#0154AA] px-5 tracking-normal text-white transition hover:bg-[#014494] active:scale-[.98]"
              type="button"
            >
              Resume Builder
            </button>
            <button onClick={() => navigate('/profile')} className="shrink-0 cursor-pointer" type="button" aria-label="Profile">
              <img
                src={userAvatarUrl}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover shadow-sm ring-1 ring-slate-200"
              />
            </button>
          </div>

          {/* Mobile toggles (only on mobile) */}
          <div className="flex tablet:hidden items-center gap-2">
            <button
              className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-slate-200 bg-white hover:ring-blue-400 transition cursor-pointer"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              type="button"
            >
              {open ? <CloseIcon className="text-slate-700" /> : <MenuIcon className="text-slate-700" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="tablet:hidden animate-slide-down origin-top rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            <div className="mb-3 flex items-center gap-2">
              <NavbarSearch fullWidth />
              <button
                onClick={() => {
                  navigate('/resume-builder')
                  setOpen(false)
                }}
                className="navbar-resume-btn inline-flex h-10 shrink-0 cursor-pointer items-center justify-center bg-[#0154AA] px-4 text-[14px] font-medium leading-none tracking-normal text-white transition hover:bg-[#014494] active:scale-[.98]"
                type="button"
              >
                Resume
              </button>
            </div>
            <nav className="grid gap-2">
              {NAV_ITEMS.map((it) => (
                <Item key={it.label} item={it} />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

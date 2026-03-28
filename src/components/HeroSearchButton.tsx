import React from 'react'
import heroSearchIconUrl from '../assets/icon-search.svg'

type HeroSearchButtonProps = {
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

/**
 * Primary “Search” control for the hero job search row (with keyword + dropdowns).
 * Separate from {@link NavbarSearch}; uses `src/assets/icon-search.svg` in the blue button.
 */
const HeroSearchButton: React.FC<HeroSearchButtonProps> = ({ className = '', type = 'button', onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        'cursor-pointer inline-flex shrink-0 items-center justify-center gap-0 rounded-md bg-[#0154AA] font-medium text-white transition hover:bg-[#014494] active:scale-[.98]',
        className || 'h-12 min-w-[108px] px-4 text-[14px]',
      ].join(' ')}
    >
      <span className="mr-2 inline-flex h-[18px] w-[18px] items-center justify-center">
        <img
          src={heroSearchIconUrl}
          alt=""
          aria-hidden
          draggable={false}
          className="h-[18px] w-[18px] select-none object-contain text-white invert brightness-0"
        />
      </span>
      Search
    </button>
  )
}

export default HeroSearchButton

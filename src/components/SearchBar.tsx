import React from 'react'
import HeroSearchButton from './HeroSearchButton'
import chevronDownIconUrl from '../assets/icon-chevron-down.svg'

// ─── Constants ───────────────────────────────────────────────────────────────
const LOCATIONS = [
  'Seattle, USA', 'Berlin, Germany', 'Toronto, Canada', 'Austin, USA',
  'London, UK', 'San Francisco, USA', 'Sydney, Australia', 'Dublin, Ireland',
  'New York, USA', 'Paris, France', 'Warsaw, Poland', 'Tokyo, Japan',
]
const JOB_TYPES = [
  'Full-time', 'Part-time', 'Contract', 'Internship', 'Remote', 'Hybrid', 'On-site',
]

// ─── Sub-components ──────────────────────────────────────────────────────────
const VDivider: React.FC = () => (
  <div className="my-auto h-6 w-px shrink-0 bg-slate-200" />
)

const ChevronDownIcon: React.FC<{ open?: boolean }> = ({ open }) => (
  <img
    src={chevronDownIconUrl}
    alt=""
    aria-hidden
    draggable={false}
    className={[
      'h-3 w-3 shrink-0 select-none object-contain transition-transform',
      open ? 'rotate-180' : '',
    ].filter(Boolean).join(' ')}
  />
)

// ─── Main Component ──────────────────────────────────────────────────────────
const SearchBar: React.FC = () => {
  const [query, setQuery] = React.useState('')
  const [locationOpen, setLocationOpen] = React.useState(false)
  const [typeOpen, setTypeOpen] = React.useState(false)
  const [location, setLocation] = React.useState('Select Location')
  const [jobType, setJobType] = React.useState('Job Type')

  const locationRef = React.useRef<HTMLDivElement>(null)
  const typeRef = React.useRef<HTMLDivElement>(null)

  // Close dropdowns on outside click
  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (locationRef.current && !locationRef.current.contains(t)) setLocationOpen(false)
      if (typeRef.current && !typeRef.current.contains(t)) setTypeOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const dropdownItemCls =
    'w-full cursor-pointer rounded-md px-3 py-2 text-left text-[12px] text-slate-700 hover:bg-slate-50'

  return (
    <div className="mt-6 w-full rounded-lg bg-white p-1 shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/90">

      {/* ── Mobile (stacked) ─────────────────────────────────────────────── */}
      <div className="flex flex-col gap-2 p-1 tablet:hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Job Title, Company, or Keywords"
          className="min-h-[44px] w-full rounded-md bg-white px-3 text-[14px] font-normal text-slate-700 outline-none ring-1 ring-slate-200 placeholder:text-slate-400"
        />
        <HeroSearchButton className="h-11 w-full px-4 text-[14px]" />
      </div>

      {/* ── Tablet+ (single row) ─────────────────────────────────────────── */}
      {/*
        Layout: [keyword input] | [location] | [job type] | [search btn]
        All siblings in one flat flex row — VDivider sits between each section.
        No nested grid so dividers align perfectly.
      */}
      <div className="hidden min-h-[52px] items-center tablet:flex">

        {/* Keyword ── flex-1 so it takes remaining space */}
        <div className="flex flex-1 items-center py-2 pl-3 pr-3 laptop:pl-4 laptop:pr-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Job Title, Company, or Keywords"
            className="w-full bg-transparent text-[14px] font-normal text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <VDivider />

        {/* Location dropdown ── fixed width */}
        <div
          ref={locationRef}
          className="relative flex w-[140px] shrink-0 items-center laptop:w-[190px]"
        >
          <button
            type="button"
            onClick={() => { setLocationOpen((v) => !v); setTypeOpen(false) }}
            className=" cursor-pointer flex w-full items-center justify-between gap-1.5 px-3 py-3 text-left text-[12px] font-normal text-slate-600 select-none"
          >
            <span className="flex-1 truncate">{location}</span>
            <ChevronDownIcon open={locationOpen} />
          </button>

          {locationOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-[220px] animate-pop rounded-lg bg-white p-2 shadow-xl ring-1 ring-slate-300">
              <div className="max-h-64 overflow-auto">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => { setLocation(loc); setLocationOpen(false) }}
                    className={dropdownItemCls}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <VDivider />

        {/* Job Type dropdown ── fixed width */}
        <div
          ref={typeRef}
          className="relative flex w-[120px] shrink-0 items-center laptop:w-[160px]"
        >
          <button
            type="button"
            onClick={() => { setTypeOpen((v) => !v); setLocationOpen(false) }}
            className="flex w-full items-center justify-between gap-1.5 px-3 py-3 text-left text-[12px] font-normal text-slate-600 select-none cursor-pointer"
          >
            <span className="flex-1 truncate">{jobType}</span>
            <ChevronDownIcon open={typeOpen} />
          </button>

          {typeOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-[200px] animate-pop rounded-lg bg-white p-2 shadow-xl ring-1 ring-slate-300">
              <div className="max-h-56 overflow-auto">
                {JOB_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => { setJobType(t); setTypeOpen(false) }}
                    className={dropdownItemCls}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search button */}
        <div className="shrink-0 py-1 pl-2 pr-1 laptop:pr-2">
          <HeroSearchButton className="h-10 rounded-md px-8 text-[13px] laptop:px-8 text-white" />
        </div>

      </div>
    </div>
  )
}

export default SearchBar

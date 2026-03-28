import React from 'react'
import profileAvatarUrl from '../assets/profile-card-avatar.svg'
import chevronDownIconUrl from '../assets/icon-chevron-down.svg'

type Props = {
  name: string
}

const ProfileCard: React.FC<Props> = ({ name }) => {
  return (
    <aside className="flex w-full flex-col gap-4 laptop-sm:w-[346px]">

      {/* Profile summary */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <img
          src="/banner.png"
          alt="Profile banner"
          className="h-28 w-full object-cover"
        />

        <div className="-mt-12 flex justify-center">
          <img
            src={profileAvatarUrl}
            alt={name}
            className="h-24 w-24 rounded-full bg-white object-cover shadow-md ring-2 ring-white"
          />
        </div>

        <div className="px-5 pb-5 pt-2">
          <div className="text-center text-[18px] font-semibold leading-tight text-slate-800">
            {name}
          </div>

          <div className="mx-auto mt-1.5 max-w-[260px] text-center text-[14px] leading-snug text-slate-700">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </div>

          <div className="mt-1.5 text-center text-[12px] text-slate-600">
            Clinton, Maryland
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex h-[137px] flex-col">

          <div className="flex flex-1 items-center justify-between px-5">
            <span className="text-[14px] text-slate-900">
              Profile Visitors
            </span>
            <span className="text-[14px] tabular-nums text-[#0154AA]">
              140
            </span>
          </div>

          <div className="mx-5 h-px bg-slate-300" />

          <div className="flex flex-1 items-center justify-between px-5">
            <span className="text-[14px] text-slate-900">
              Resume Viewers
            </span>
            <span className="text-[14px] tabular-nums text-[#0154AA]">
              20
            </span>
          </div>

          <div className="mx-5 h-px bg-slate-300" />

          <div className="flex flex-1 items-center justify-between px-5">
            <span className="text-[14px] text-slate-900">
              My Jobs
            </span>
            <span className="text-[14px] tabular-nums text-[#0154AA]">
              88
            </span>
          </div>

        </div>
      </div>

      {/* Calendar Card (FIXED) */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm cursor-pointer">
        <button
          type="button"
          className="flex h-[56px] w-full items-center justify-between gap-3 px-5 text-left cursor-pointer"
        >
          <div className="min-w-0">
            <div className="text-[14px] font-semibold text-slate-900">
              My calendar
            </div>
            <div className="mt-0.5 text-[12px] text-slate-500">
              Upcoming Interviews
            </div>
          </div>

          <img
            src={chevronDownIconUrl}
            alt=""
            aria-hidden
            draggable={false}
            className="h-4 w-4 shrink-0 object-contain opacity-70"
          />
        </button>
      </div>

    </aside>
  )
}

export default ProfileCard
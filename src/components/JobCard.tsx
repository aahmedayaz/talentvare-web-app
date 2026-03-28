import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { RootState, markApplied, toggleSaved } from '../store';
import type { JobData } from '../data/jobs';
import companyAvatarUrl from '../assets/company-avatar.svg';
import locationIcon from '../assets/location.svg';
import timeIcon from '../assets/time.svg';

type Props = {
  jobId: string;
  onApply: () => void;
  job?: JobData;
};

// Type assertion for react-icons
const BookmarkOutline = FaRegBookmark as React.ComponentType<{ className?: string }>;
const BookmarkFilled = FaBookmark as React.ComponentType<{ className?: string }>;

const JobCard: React.FC<Props> = ({ jobId, onApply, job }) => {
  const dispatch = useDispatch();
  const isApplied = useSelector((s: RootState) => s.jobs.applied[jobId]);
  const isSaved = useSelector((s: RootState) => s.jobs.saved[jobId]);
  const computed = job!;

  return (
    <div className="rounded-2xl ring-1 ring-slate-300 bg-white p-4 flex flex-col h-full">
      <div className="text-[12px] text-slate-500 mb-2">Promoted</div>

      <div className="flex items-center gap-3">
        <img
          src={companyAvatarUrl}
          alt="Company"
          className="h-10 w-10 rounded-lg ring-1 ring-slate-300 object-cover bg-white"
        />
        {/* Title container: allows truncation */}
        <div className="min-w-0 flex-1">
          <button
            type="button"
            className="font-semibold text-slate-800 underline decoration-transparent underline-offset-4 hover:decoration-[#0154AA] cursor-pointer truncate w-full text-left"
          >
            {computed.title}
          </button>
          <div className="text-[12px] text-slate-500">Teams</div>
        </div>
      </div>

      {/* Location & time with custom icons */}
      <div className="mt-3 mb-3 space-y-1 text-[12px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <img src={locationIcon} alt="location" className="w-3 h-3" />
          <span>{computed.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <img src={timeIcon} alt="time" className="w-3 h-3" />
          <span>
            {computed.postedAt} |{' '}
            <span className="text-[#0154AA]">{computed.applicants} applicants</span>
          </span>
        </div>
      </div>

      {/* Buttons – always at bottom */}
      <div className="mt-auto flex items-center gap-2">
        <button
          onClick={() => {
            if (!isApplied) {
              dispatch(markApplied(jobId));
              onApply();
            }
          }}
          disabled={isApplied}
          className={`flex-1 h-9 rounded-lg px-4 text-[14px] font-medium inline-flex items-center justify-center ${isApplied
              ? 'bg-green-600 text-white cursor-default'
              : 'bg-[#0154AA] text-white cursor-pointer'
            }`}
        >
          {isApplied ? 'Applied ✓' : 'Apply Now'}
        </button>
        <button
          onClick={() => {
            dispatch(toggleSaved(jobId));
            const nowSaved = !isSaved;
            toast[nowSaved ? 'success' : 'info'](
              nowSaved ? 'Saved to bookmarks' : 'Removed from bookmarks',
              { toastId: nowSaved ? `save-${jobId}` : `unsave-${jobId}` }
            );
          }}
          className="h-9 w-9 grid place-items-center rounded-lg text-slate-500 cursor-pointer"
          aria-label="Save"
        >
          {isSaved
            ? <BookmarkFilled className="h-5 w-5" />
            : <BookmarkOutline className="h-5 w-5" />
          }
        </button>
      </div>
    </div>
  );
};

export default JobCard;
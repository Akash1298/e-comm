"use client";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <span className="relative flex h-16 w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <svg className="m-auto animate-spin h-10 w-10 text-white opacity-90" viewBox="0 0 24 24">
            <circle
              className="opacity-30"
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-90"
              fill="white"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </span>
      </span>
    </div>
  );
}

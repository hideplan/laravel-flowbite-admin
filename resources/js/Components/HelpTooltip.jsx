import { useEffect } from 'react'
import { v4 } from 'uuid'

export default function ({ placement = 'right', children }) {
    const id = v4()
    return (
        <>
            <svg data-tooltip-target={id} data-tooltip-placement={placement} className="w-4 text-gray-800 dark:text-white" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div id={id} role="tooltip"
                 className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                {children}
                <div className="tooltip-arrow" data-popper-arrow="" />
            </div>
        </>
    )
}

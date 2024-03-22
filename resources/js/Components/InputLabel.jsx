import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
import HelpTooltip from '@/Components/HelpTooltip.jsx'

export default function InputLabel ({ value, className = '', help = '', helpPlacement = 'right', children, ...props }) {
    return (
        <label {...props} className={`flex items-center space-x-1 mb-2 text-sm font-medium text-gray-900 dark:text-white ` + className}>
            <span>{value ? value : children}</span>
            {help && <HelpTooltip placement={helpPlacement}>{help}</HelpTooltip>}
        </label>
    )

}

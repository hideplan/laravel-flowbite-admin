import { forwardRef, useEffect, useRef } from 'react'
import InputError from '@/Components/InputError.jsx'

export default forwardRef(function TextInput ({ type = 'text', error = false, isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef()
    useEffect(() => {
        if (isFocused) {
            input.current.focus()
        }
    }, [])

    return (<>
        <input {...props} type={type} ref={input}
               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <InputError message={error} />
    </>)

})

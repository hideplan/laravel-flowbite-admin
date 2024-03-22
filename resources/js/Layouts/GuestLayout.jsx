import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link, usePage } from '@inertiajs/react'
import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'

export default function Guest ({ children }) {
    const { app: { name } } = usePage().props
    useEffect(() => {initFlowbite()}, [])
    return (
        <main className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
                <Link href="/" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
                    <ApplicationLogo className="mr-4 h-11" />
                    <span>{name}</span>
                </Link>
                {children}
            </div>
        </main>
    )
}

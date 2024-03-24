import { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel.jsx'
import TextInput from '@/Components/TextInput.jsx'

export default function Login ({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        post(route('login'))
    }

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
                <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">登陆</h2>
                <form className="mt-8 space-y-6" onSubmit={onSubmit} onChange={onChange}>
                    <div className="mb-6">
                        <InputLabel htmlFor="email" help="以@example.com结尾">邮箱</InputLabel>
                        <TextInput type="email" name="email" id="email" defaultValue={data.email} error={errors.email} isFocused required />
                    </div>
                    <div className="mb-6">
                        <InputLabel htmlFor="password">密码</InputLabel>
                        <TextInput type="password" name="password" id="password" error={errors.password} placeholder="••••••••" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                                   className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                   required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">
                                记住我
                            </label>
                        </div>
                        {canResetPassword && (
                            <Link href={route('password.request')} className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                                忘记密码?
                            </Link>
                        )}
                    </div>
                    <button type="submit"
                            className="w-full px-5 py-3 text-base font-medium text-white text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        登陆
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Link href={route('register')} className="text-blue-700 hover:underline dark:text-blue-500">
                            注册
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    )
}

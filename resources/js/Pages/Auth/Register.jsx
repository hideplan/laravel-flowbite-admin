import { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel.jsx'
import TextInput from '@/Components/TextInput.jsx'

export default function Register () {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '', email: '', password: '', password_confirmation: '',
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        post(route('register'))
    }
    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (<GuestLayout>
        <Head title="Register" />

        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
            <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
                创建账号 </h2>
            <form className="mt-8 space-y-6" onSubmit={onSubmit} onChange={onChange}>
                <div className="mb-6">
                    <InputLabel htmlFor="email">名字</InputLabel>
                    <TextInput type="text" name="name" id="name" defaultValue={data.name} error={errors.name} isFocused required />
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="email" help="只接受以@example.com结尾">邮箱</InputLabel>
                    <TextInput type="email" name="email" id="email" defaultValue={data.email} error={errors.email} placeholder="xxx@example.com" required />
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="password" help="至少8个字符">密码</InputLabel>
                    <TextInput type="password" name="password" id="password" error={errors.password} placeholder="••••••••" required />
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="password_confirmation">确认秘密</InputLabel>
                    <TextInput type="password" name="password_confirmation" id="password_confirmation" placeholder="••••••••" required />
                </div>
                <button type="submit"
                        className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    创建
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    <Link href={route('login')} className="text-blue-700 hover:underline dark:text-blue-500">已有账号?</Link>
                </div>
            </form>
        </div>
    </GuestLayout>)
}

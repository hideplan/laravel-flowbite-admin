import { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel.jsx'
import TextInput from '@/Components/TextInput.jsx'
import FormCard from '@/Pages/Auth/FormCard.jsx'
import Button from '@/Components/Button.jsx'

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
        <FormCard title="注册" onSubmit={onSubmit} onChange={onChange}>
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
            <Button.PrimaryButton type="submit" disabled={processing} block>创建</Button.PrimaryButton>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                <Link href={route('login')} className="text-blue-700 hover:underline dark:text-blue-500">已有账号?</Link>
            </div>
        </FormCard>
    </GuestLayout>)
}

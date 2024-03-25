import { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { Head, useForm } from '@inertiajs/react'
import FormCard from '@/Pages/Auth/FormCard.jsx'
import Button from '@/Components/Button.jsx'

export default function ResetPassword ({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        post(route('password.store'))
    }

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <FormCard title="重置密码" onSubmit={onSubmit} onChange={onChange}>
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
            </FormCard>
        </GuestLayout>
    )
}

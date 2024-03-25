import GuestLayout from '@/Layouts/GuestLayout'
import TextInput from '@/Components/TextInput'
import { Head, useForm } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel.jsx'
import Button from '@/Components/Button.jsx'
import FormCard from '@/Pages/Auth/FormCard.jsx'

export default function ForgotPassword ({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()

        post(route('password.email'))
    }

    const onChange = e => {
        setData(e.target.name, e.target.value)
    }

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <FormCard title="忘记密码" description="输入您的电子邮件地址，我们将向您发送一个代码以重置您的密码" onSubmit={onSubmit} onChange={onChange}>
                <div>
                    <InputLabel htmlFor="email" help="以@example.com结尾">邮箱</InputLabel>
                    <TextInput type="email" name="email" id="email" defaultValue={data.email} error={errors.email} isFocused required />
                </div>
                <Button.PrimaryButton type="submit" disabled={processing} block>重设密码</Button.PrimaryButton>
            </FormCard>
        </GuestLayout>)
}

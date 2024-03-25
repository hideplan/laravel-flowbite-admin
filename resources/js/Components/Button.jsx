const PrimaryButton = function ({ type = 'button', disabled, block = false, children, ...props }) {
    return (<button type={type}
                    {...props}
                    className={'px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ' + (block ? 'w-full' : '')}
                    disabled={disabled}>
        {children}
    </button>)
}

const Button = {
    PrimaryButton
}
export default Button

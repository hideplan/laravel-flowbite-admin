export default function InputError ({ message, ...props }) {
    return message ? (
            <p {...props} className="mt-2 text-sm text-red-600 dark:text-red-500">
                {message} </p>
        ) :
        null
}

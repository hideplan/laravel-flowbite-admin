export default function ({ title, description, onSubmit, onChange, children }) {
    return (
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
            <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">{title}</h2>
            {description && <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>}
            <form className="mt-8 space-y-6" onSubmit={onSubmit} onChange={onChange}>
                {children}
            </form>
        </div>
    )
}

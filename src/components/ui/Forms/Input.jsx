export function Input({ id, type, placeholder, label, autoComplete = "on", style }) {
    return (
        <label htmlFor={id} className={`flex flex-col gap-[0.56rem] text-label-form ${style}`}>
            {label}
            <input
                type={type}
                id={id}
                className="form-input h-14 rounded-lg border-[1px] border-form placeholder:pl-6 placeholder:text-placeholder-form placeholder:text-black/40"
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
        </label>
    )
}

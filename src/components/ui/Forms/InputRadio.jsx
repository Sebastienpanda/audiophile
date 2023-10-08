import { useState } from "react"

export function InputRadio({ id, label, defaultChecked, onChange }) {
    const [checked, setChecked] = useState(defaultChecked)

    const handleRadioChange = () => {
        if (!checked) {
            setChecked(!checked)
            if (onChange) {
                onChange(id)
            }
        }
    }

    return (
        <>
            <label className="flex cursor-pointer items-center space-x-2">
                <input type="radio" id={id} checked={checked} onChange={handleRadioChange} className="hidden" />
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300">
                    {checked && <span className="h-3 w-3 rounded-full bg-primary"></span>}
                </span>
                <span className="text-gray-700">{label}</span>
            </label>
        </>
    )
}

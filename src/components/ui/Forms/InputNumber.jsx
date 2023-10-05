import { useState } from "react"

export function InputNumber({ iconLeft, iconRight, value, style }) {
    const [number, setNumber] = useState(parseInt(value))

    const increment = (e) => {
        e.preventDefault()
        setNumber(number + 1)
    }

    const decrement = (e) => {
        e.preventDefault()
        setNumber(number - 1)
    }
    const handleChange = (e) => {
        setNumber(e.target.value)
    }

    return (
        <div className={`flex flex-row bg-card ${style}`}>
            <button
                className="w-10 cursor-pointer rounded-l text-shop text-black/25
                                     transition-colors duration-[350ms] ease-in-out hover:text-primary"
                onClick={decrement}
                disabled={number === 0}
            >
                <span className="m-auto">{iconLeft}</span>
            </button>
            <input
                type="number"
                name="number"
                id="number"
                value={number}
                onChange={handleChange}
                className="w-10 bg-card text-center text-shop outline-none"
                readOnly
            />
            <button
                className="w-10 cursor-pointer text-shop text-black/25
                                transition-colors duration-[350ms] ease-in-out hover:text-primary"
                onClick={increment}
            >
                <span className="m-auto">{iconRight}</span>
            </button>
        </div>
    )
}

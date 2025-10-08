import type { Dispatch, SetStateAction } from "react";
import type React from "react";

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    setStatus: Dispatch<SetStateAction<string>>;
}

export function InputField( { label, type, placeholder, setStatus}: InputProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
            type={type}
            placeholder={placeholder}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setStatus(e.target.value)}
            />
        </div>
    )
}
import type { IDropdownProps } from "./interfaces"

export const Dropdown = ({
    options = [],
    placeholder = "Select an option",
    value,
    onChange,
  }: IDropdownProps) => {
    return (
       <select
         value={value}
         onChange={(e) => onChange?.(e.target.value)}
         className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md
                    focus:outline-none focus:border-orange-500 hover:border-orange-500
                    transition-colors duration-200 shadow focus:shadow
                    appearance-none bg-white bg-no-repeat 
                    bg-[length:16px] bg-[right_0.75rem_center]
                    bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')]"
       >
         <option value="" disabled>
           {placeholder}
         </option>
         {options.map((option) => (
           <option key={option.value} value={option.value}>
             {option.label}
           </option>
         ))}
       </select>
    )
  }
  
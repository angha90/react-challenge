import type { ITextAreaProps } from "./interfaces"

export const TextArea = ({ rows= 5 }: ITextAreaProps) => {
  return (
    <textarea rows={rows} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 hover:border-orange-500 transition-colors duration-200 shadow focus:shadow w-full" />
  )
}
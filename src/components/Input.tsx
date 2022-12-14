interface Props{
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onEnterKeyDown?:(e:React.KeyboardEvent<HTMLInputElement>)=>void
    placeholder: string
    value?:string | number | readonly string[]
}

export const Input = ({onChange,onEnterKeyDown,placeholder,value}:Props) => {
    return (
        <input className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={placeholder} onChange={onChange} onKeyDown={(e) => {
            onEnterKeyDown && onEnterKeyDown(e)
        }} value={value} />
    )
}
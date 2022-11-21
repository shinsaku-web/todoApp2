interface Props{
    onChange:()=>void
    placeholder:string
}

export const Input = ({onChange,placeholder}:Props) => {
    return (
        <input className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={placeholder} onChange={onChange} />
    )
}
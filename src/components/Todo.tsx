import { BsFillTrashFill } from "react-icons/bs"

interface Props{
    title:string
}

export const Todo = ({title}:Props) => {
    return (
        <div className="flex p-4 border 
         items-center justify-between">
            <div className="pr-2">{title}</div>
            <span className="cursor-pointer flex-shrink-0">
            <BsFillTrashFill/>
            </span>
        </div>
    )
}
import { BsFillTrashFill } from "react-icons/bs"

interface Props{
    title: string
    deleteFunc:()=>void
}

export const Todo = ({title,deleteFunc}:Props) => {
    return (
        <div className="flex p-4 border 
         items-center rounded justify-between">
            <div className="pr-2">{title}</div>
            <span className="cursor-pointer flex-shrink-0">
            <BsFillTrashFill onClick={deleteFunc}/>
            </span>
        </div>
    )
}
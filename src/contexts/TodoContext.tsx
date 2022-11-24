import { createContext, ReactNode } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }:{children:ReactNode}) => {
    const todos = useTodo();
    return (
        <TodoContext.Provider value={todos}>
            {children}
        </TodoContext.Provider>
    )
}
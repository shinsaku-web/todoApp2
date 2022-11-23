import { useTodo } from "../hooks/useTodo";
import { sum } from "./sum";
import { renderHook,act,fireEvent } from "@testing-library/react"


describe("Calculate", () => {
    test("sum", () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(3, 3)).toBe(6);
    });
});

describe("useTodo", () => {
    const {result} = renderHook(() => useTodo());
    test("initial state", () => {
        expect(result.current.showTodos).toStrictEqual([])
        expect(result.current.newTodo).toStrictEqual("")
    });
    test('add new todo', () => {
        act(() => {
            // fireEvent.change()
            // result.current.addNewTodo()
        })
    })
});
import { useTodo } from "./useTodo";
import { renderHook,act,fireEvent, render, screen } from "@testing-library/react"

describe("useTodo", () => {
    test("initial state", () => {
        const {result} = renderHook(() => useTodo());
        expect(result.current.showTodos).toStrictEqual([])
        expect(result.current.newTodo).toStrictEqual("")
    });
    test('new todo の更新', () => {
        const {result} = renderHook(() => useTodo());
        const expectValue = "テスト";
        const eventObject = {
        target: {
          value: expectValue,
        },
        };
        act(() => {
            result.current.changeNewTodo(eventObject)
        })
        expect(result.current.newTodo).toBe(expectValue)
    })
    test('todoの追加', () => {
        const {result} = renderHook(() => useTodo());
        const expectValue = "テスト";
        const eventObject = {
        target: {
            value: expectValue,
            },
            key: "Enter"
        };
        act(() => {
            result.current.addNewTodo(eventObject)
        })
        expect(result.current.showTodos).toBe([{id:1,title:expectValue}])
    })
});
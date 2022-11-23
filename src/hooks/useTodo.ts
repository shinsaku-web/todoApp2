import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
};

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //データとして保持するTodo
  const [showTodos, setShowTodos] = useState<Todo[]>([]); //実際に表示するTodo
  const [newTodo, setNewTodo] = useState<string>("");

  const fetchTodos = () => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        setShowTodos(res.data);
        setTodos(res.data);
      })
      .catch((e) => {
        console.error(e);
        alert("エラー");
      });
  };

  const changeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      axios
        .post("http://localhost:3000/todos", { title: newTodo })
        .then(() => {
          setNewTodo("");
          fetchTodos();
        })
        .catch((err) => {
          console.error(err);
          alert("エラー");
        });
    }
  };

  const deleteTodo = (id: number) => {
    axios
      .delete(`http://localhost:3000/todos/${id}`)
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.error(err);
        alert("エラー");
      });
  };

  const searchTodo = (text: string) => {
    if (!text) {
      fetchTodos();
      return;
    }
    const filterTodos = todos.filter((todo) => {
      const reg = new RegExp(`^${text}`);
      return reg.test(todo.title);
    });
    setShowTodos(filterTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    showTodos,
    newTodo,
    changeNewTodo,
    addNewTodo,
    deleteTodo,
    searchTodo,
  };
};

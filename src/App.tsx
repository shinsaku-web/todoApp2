import { useEffect, useState } from 'react'
import axios from 'axios';
import { BsFillTrashFill } from "react-icons/bs";
import { Todo } from './components/Todo';
import { Input } from './components/Input';

type Todo = {
  id: number
  title:string
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState<string>("")

  const fetchTodos = () => {
    axios.get('http://localhost:3000/todos')
      .then(res => {
        setTodos(res.data)
      })
      .catch(e => {
        console.error(e)
        alert("取得に失敗しました")
      }
      ).catch(e => {
        console.error(e)
        alert("サーバーエラー！")
      })
  }

  const changeNewTodo = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const addNewTodo = () => {
    axios.post('http://localhost:3000/todos',{title:newTodo})
      .then(() => {
        fetchTodos()
      })
      .catch(e => {
        console.error(e)
        alert("追加に失敗しました")
      })
      .catch(e => {
        console.error(e)
        alert("サーバーエラー！")
      })
  }

  useEffect(() => {
    fetchTodos()
  },[])

  return (
    <div className="App">
      <h1 className='text-center font-bold text-3xl pt-20'>TODO</h1>
      <div className='max-w-lg py-16 mx-auto'>
        <div>
          <Input placeholder='Todoを入力' onChange={(e) => changeNewTodo(e)} onEnterKeyDown={addNewTodo} />
        </div>
        <div className='pt-4'>
          <Input placeholder='検索' onChange={()=>console.log("change")
          }/>
        </div>
        <div className='pt-10'>
        {todos.length ?
          <ul className='space-y-4'>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo title={todo.title} />
          </li>
        ))}
          </ul>
          : <p className='text-center'>todoはありません</p>}
        </div>
        </div>
    </div>
  )
}

export default App

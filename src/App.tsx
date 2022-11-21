import { useEffect, useState } from 'react'
import axios from 'axios';
import { BsFillTrashFill } from "react-icons/bs";

type Todo = {
  id: number
  title:string
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  console.log(todos);
  useEffect(() => {
    axios.get('http://localhost:3000/todos')
      .then(res => {
        setTodos(res.data)
      })
      .catch(e => console.error(e)
      )
  },[])

  return (
    <div className="App">
      <h1 className='text-center font-bold text-3xl pt-20'>TODO</h1>
      <div className='max-w-xl py-16 mx-auto'>
        <div className=''>
        {todos.length ?
          <ul>
        {todos.map((todo) => (
          <li className='p-4 ' key={todo.id}>{todo.title}
            <BsFillTrashFill/></li>
        ))}
          </ul>
          : <p>todoはありません</p>}
        </div>
        </div>
    </div>
  )
}

export default App

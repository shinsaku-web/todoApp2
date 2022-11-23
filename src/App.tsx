import { useEffect, useState } from 'react'
import axios from 'axios';
import { Todo } from './components/Todo';
import { Input } from './components/Input';

type Todo = {
  id: number
  title:string
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])//データとして保持するTodo
  const [showTodos, setShowTodos] = useState<Todo[]>([])//実際に表示するTodo
  const [newTodo, setNewTodo] = useState<string>("")

  const fetchTodos = () => {
    axios.get('http://localhost:3000/todos')
      .then(res => {
        setShowTodos(res.data)
        setTodos(res.data)
      }).catch(e => {
        console.error(e)
        alert("エラー")
      })
  }

  const changeNewTodo = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const addNewTodo = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key==="Enter") {
      axios.post('http://localhost:3000/todos',{title:newTodo})
        .then(() => {
          setNewTodo("")
          fetchTodos()
        })
        .catch(err => {
          console.error(err)
          alert("エラー")
        })
    }
  }

  const deleteTodo = (id: number) => {
    axios.delete(`http://localhost:3000/todos/${id}`)
    .then(() => {
      fetchTodos()
    })
    .catch((err) => {
      console.error(err);
      alert("エラー")
    })
  }

  const searchTodo = (text: string) => {
    if (!text) {
      fetchTodos()
      return
    }
    const filterTodos = todos.filter((todo) => {
      const reg = new RegExp(`^${text}`)
      return (
        reg.test(todo.title)
      )
    })
    setShowTodos(filterTodos)
  }

  useEffect(() => {
    fetchTodos()
  },[])

  return (
    <div className="App">
      <h1 className='text-center font-bold text-3xl pt-20'>TODO</h1>
      <div className='max-w-lg py-16 mx-auto'>
        <div>
          <Input placeholder='Todoを入力' onChange={(e) => changeNewTodo(e)} onEnterKeyDown={(e) => addNewTodo(e)} value={newTodo} />
        </div>
        <div className='pt-4'>
          <Input placeholder='検索' onChange={(e) => searchTodo(e.currentTarget.value)
          } />
        </div>
        <div className='pt-10'>
        {showTodos.length ?
          <ul className='space-y-4'>
        {showTodos.map((todo) => (
          <li key={todo.id}>
            <Todo title={todo.title} deleteFunc={()=>deleteTodo(todo.id)} />
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

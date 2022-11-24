import { Todo } from './components/Todo';
import { Input } from './components/Input';
import { useTodo } from './hooks/useTodo';
import { useContext } from 'react';
import { TodoContext } from './contexts/TodoContext';

function App() {
  // const {showTodos,newTodo,changeNewTodo,addNewTodo,deleteTodo,searchTodo} = useTodo();
  const {showTodos,newTodo,changeNewTodo,addNewTodo,deleteTodo,searchTodo} = useContext(TodoContext);

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

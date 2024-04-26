import React from 'react'

export function Todo({ todo, removeTodo, completeTodo }) {
  return (
    <div className="todo  flex justify-between items-center bg-white mb-4 p-5 rounded-lg">
      <div className="content" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        <p className='text-xl'>{todo.text}</p>
        <p className="category text-xl font-medium">
          ({todo.category})
        </p>
      </div>

      <div className='flex gap-3'>
        <button className='bg-green-400' onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className='bg-red-500' onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  )
}

export default Todo;
import React, { useState } from "react"


export function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!value || !category) return
    //add todo 
    addTodo(value, category)
    // limpar os campos
    setValue('')
    setCategory('')

  }

  return (
    // todo-form
    <div className="pb-6">
      <h2 className="h2">Criar tarefa</h2>

      <form onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="Digite o título" value={value} onChange={(event) => setValue(event.target.value)} />

        <select className="select" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit" className="button">Criar tarefa</button>
      </form>
    </div>
  )
}
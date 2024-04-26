
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter mt-3">
      <h2 className="h2">Filtrar</h2>
      <div className="filter-options flex justify-between gap-12">
        <div className="flex-1">
          <p className="text-lg">Status:</p>

          <select className="select" value={filter} onChange={(event) => setFilter(event.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">incompletas</option>
          </select>
        </div>

        <div className="flex-1 items-center">
          <p className="text-lg">Ordem alfabética</p>
          <div className="flex gap-4 mt-3">
            <button onClick={() => setSort('Asc')}>Asc</button>
            <button onClick={() => setSort('Desc')}>Desc</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
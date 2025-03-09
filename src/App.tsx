import { MultiSelectList, MultiSelectSearchFilter } from "./components/multi-select-filter"

function App() {

  return (
    <div className="multi-select-filter">
      <h3 className="page-title">
        Productgroep
      </h3>
      <MultiSelectSearchFilter />
      <MultiSelectList />
      <button className="apply-btn">Toepassen</button>
    </div>
  )
}

export default App

import { MultiSelectList, MultiSelectSearchFilter } from "./components/multi-select-filter"

function App() {

  return (
    <div className="multi-select-filter">
      <h1>
        Productgroep
      </h1>
      <MultiSelectSearchFilter />
      <MultiSelectList />
      <button className="apply-btn">Test</button>
    </div>
  )
}

export default App

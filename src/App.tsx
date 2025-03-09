import { MultiSelectList, MultiSelectSearchFilter } from "./components/multi-select-filter"

function App() {

  return (
    <div className="multi-select-filter" data-testid="multi-select-filter">
      <h3 className="page-title" data-testid="multi-select-filter-page-title">
        Productgroep
      </h3>
      <MultiSelectSearchFilter />
      <MultiSelectList />
      <button className="apply-btn" data-testid="multi-select-filter-apply-btn">Toepassen</button>
    </div>
  )
}

export default App

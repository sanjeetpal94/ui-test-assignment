import { users } from "./Data/mockData"
import { usePersistedState } from "./hooks/usePersistedState"
import { filterUsers } from "./utils/filterUtils"
import Filters from "./components/Filters"
import DonutChart from "./components/DonutChart"
import DataTable from "./components/DataTable"

function App() {
  const [search, setSearch] = usePersistedState("search", "")
  const [status, setStatus] = usePersistedState("status", "All")

  const filteredUsers = filterUsers(users, search, status)

  const chartData = [
    { name: "Active", value: users.filter(u => u.status === "Active").length },
    { name: "Inactive", value: users.filter(u => u.status === "Inactive").length },
    { name: "Pending", value: users.filter(u => u.status === "Pending").length },
  ]

  return (
    <div className="p-6 space-y-6">
      <Filters search={search} setSearch={setSearch} />
      <DonutChart data={chartData} onStatusClick={setStatus} />
      <DataTable users={filteredUsers} />
    </div>
  )
}

export default App
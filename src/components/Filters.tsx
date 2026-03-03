interface Props {
    search: string
    setSearch: (value: string) => void
  }
  
  export default function Filters({ search, setSearch }: Props) {
    return (
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border p-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    )
  }
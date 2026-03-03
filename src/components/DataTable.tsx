import type { UserData } from "../types"

interface Props {
  users: UserData[]
}

export default function DataTable({ users }: Props) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="text-center border-t">
            <td className="p-2">{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
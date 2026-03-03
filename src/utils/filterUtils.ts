import type { UserData } from "../types"

export function filterUsers(
  users: UserData[],
  search: string,
  status: string
) {
  return users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      status === "All" ? true : user.status === status

    return matchesSearch && matchesStatus
  })
}
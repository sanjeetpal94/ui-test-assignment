export interface UserData {
    id: number
    name: string
    email: string
    status: "Active" | "Inactive" | "Pending"
    department: string
  }
import { PieChart, Pie, Cell, Tooltip } from "recharts"

interface Props {
  data:any[]
  onStatusClick: (status: string) => void
}

const COLORS = ["#4ade80", "#f87171", "#facc15"]

export default function DonutChart({ data, onStatusClick }: Props) {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        onClick={(data) => onStatusClick(data.name)}
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  )
}
import type { BarChartData, GaugeChartData } from "../type/chartdata";

export const chartData: BarChartData[] = [
  { product: "ghh", totalValue: 40, totalSales: 15 },
  { product: "dww", totalValue: 30, totalSales: 10 },
  { product: "aaa", totalValue: 10, totalSales: 10 },
  { product: "ooo", totalValue: 17, totalSales: 8 },
  { product: "hgt", totalValue: 40, totalSales: 7 },
  { product: "ytt", totalValue: 26, totalSales: 7 },
  { product: "qzy", totalValue: 18, totalSales: 7 },
  { product: "prp", totalValue: 20, totalSales: 7 },
  { product: "eee", totalValue: 15, totalSales: 7 },
  { product: "rtt", totalValue: 23, totalSales: 4 },
];

export const gaugeChartData: GaugeChartData[] = [
  { month: "January", sales: 100000 },
  { month: "February", sales: 200000 },
  { month: "March", sales: 312000 },
  { month: "April", sales: 400000 },
  { month: "May", sales: 500000 },
  { month: "June", sales: 600000 },
  { month: "July", sales: 700000 },
  { month: "August", sales: 800000 },

  { month: "September", sales: 900000 },
  { month: "October", sales: 1000000 },
  { month: "November", sales: 5100000 },
  { month: "December", sales: 10000000 },
];

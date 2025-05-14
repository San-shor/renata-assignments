export interface BarChartData {
  product: string;
  totalSales: number;
  totalValue: number;
}

export interface TooltipItem {
  dataIndex: number;
}

export interface ChartOptions {
  responsive: boolean;
  plugins: {
    tooltip: {
      callbacks: {
        afterBody: (tooltipItems: TooltipItem[]) => string;
      };
    };
    legend: {
      display: boolean;
    };
  };
  scales: {
    x: {
      title: {
        display: boolean;
        text: string;
      };
    };
    y: {
      title: {
        display: boolean;
        text: string;
      };
      beginAtZero: boolean;
    };
  };
}

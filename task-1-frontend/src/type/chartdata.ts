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
        title: (tooltipItems: TooltipItem[]) => string;
        label: (tooltipItem: TooltipItem) => string;
        afterBody: (tooltipItems: TooltipItem[]) => string;
      };
      displayColors: boolean;
      backgroundColor: string;
      titleColor: string;
      bodyColor: string;
      borderColor: string;
      borderWidth: number;
      padding: number;
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

      grid: {
        display: boolean;
      };
    };
    y: {
      title: {
        display: boolean;
        text: string;
      };
      beginAtZero: boolean;
      grid: {
        color: string;
      };
    };
  };
}

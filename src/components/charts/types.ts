export type ChartData = Record<string, string | number>;

export interface DataKeyConfig {
  key: string;
  color?: string;
  name?: string;
}

export interface BaseChartProps {
  data: ChartData[];
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  title?: string;
  loading?: boolean;
}

export interface CartesianChartProps extends BaseChartProps {
  xAxisKey: string;
  dataKeys: DataKeyConfig[];
}

export interface PieChartProps extends BaseChartProps {
	dataKey: string;
	nameKey: string;
	innerRadius?: number;
	outerRadius?: number;
}

export const CHART_COLORS = {
  primary: '#1976d2',
  secondary: '#dc004e',
  success: '#82ca9d',
  warning: '#ffc658',
  info: '#8884d8',
  free: '#8884d8',
  pro: '#82ca9d',
  enterprise: '#ffc658',
};
import { lazy } from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { LoadingBoundary } from '../../components/LoadingBoundary';
import { useRevenue } from '../../hooks/useRevenue';
import { CHART_COLORS, type ChartData } from '../../components/charts';

const LineChart = lazy(() =>
  import('../../components/charts/LineChart').then((m) => ({ default: m.LineChart }))
);

interface RevenueChartProps {
  startMonth: string;
  endMonth: string;
}

export const RevenueChart = ({ startMonth, endMonth }: RevenueChartProps) => {
  const { data, isLoading } = useRevenue(startMonth, endMonth);

  const chartData = (data as unknown as ChartData[]) ?? [];

  return (
    <ErrorBoundary>
      <LoadingBoundary isLoading={isLoading}>
        <LineChart
          title="Revenue Trend"
          data={chartData}
          xAxisKey="month"
          dataKeys={[{ key: 'amount', color: CHART_COLORS.primary, name: 'Revenue' }]}
        />
      </LoadingBoundary>
    </ErrorBoundary>
  );
};

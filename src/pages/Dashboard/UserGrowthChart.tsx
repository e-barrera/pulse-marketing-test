import { lazy } from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { LoadingBoundary } from '../../components/LoadingBoundary';
import { useSignups } from '../../hooks/useSignups';
import { CHART_COLORS, type ChartData } from '../../components/charts';

const BarChart = lazy(() =>
  import('../../components/charts/BarChart').then((m) => ({ default: m.BarChart }))
);

interface UserGrowthChartProps {
  startMonth: string;
  endMonth: string;
}

export const UserGrowthChart = ({ startMonth, endMonth }: UserGrowthChartProps) => {
  const { data, isLoading } = useSignups(startMonth, endMonth);

  const chartData = (data as unknown as ChartData[]) ?? [];

  return (
    <ErrorBoundary>
      <LoadingBoundary isLoading={isLoading}>
        <BarChart
          title="User Growth"
          data={chartData}
          xAxisKey="month"
          dataKeys={[{ key: 'count', color: CHART_COLORS.success, name: 'New Signups' }]}
        />
      </LoadingBoundary>
    </ErrorBoundary>
  );
};

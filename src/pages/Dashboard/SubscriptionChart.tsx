import { lazy } from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { LoadingBoundary } from '../../components/LoadingBoundary';
import { useTierDistribution } from '../../hooks/useTierDistribution';
import { type ChartData } from '../../components/charts';
import type { TierBreakdownData } from '../../types';

const PieChart = lazy(() =>
  import('../../components/charts/PieChart').then((m) => ({ default: m.PieChart }))
);

interface SubscriptionChartProps {
  startMonth: string;
  endMonth: string;
}

export const SubscriptionChart = ({ startMonth, endMonth }: SubscriptionChartProps) => {
  const { data, isLoading } = useTierDistribution(startMonth, endMonth);

  const latestTier = data?.[data.length - 1];
  const tierChartData: TierBreakdownData[] = latestTier
    ? [
        { tier: 'Free', value: latestTier.free },
        { tier: 'Pro', value: latestTier.pro },
        { tier: 'Enterprise', value: latestTier.enterprise },
      ]
    : [];

  const chartData = tierChartData as unknown as ChartData[];

  return (
    <ErrorBoundary>
      <LoadingBoundary isLoading={isLoading}>
        <PieChart
          title="Subscription Breakdown"
          data={chartData}
          dataKey="value"
          nameKey="tier"
          innerRadius={60}
          outerRadius={100}
        />
      </LoadingBoundary>
    </ErrorBoundary>
  );
};

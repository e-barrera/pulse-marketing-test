import { useState, lazy } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { FilterBar } from './FilterBar';
import { LoadingBoundary } from '../../components/LoadingBoundary';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { useMockData, type FilterParams } from '../../hooks';
import { useRevenue } from '../../hooks/useRevenue';
import { useSignups } from '../../hooks/useSignups';
import { useTierDistribution } from '../../hooks/useTierDistribution';
import { useDowntimes } from '../../hooks/useDowntimes';
import { CHART_COLORS, type ChartData } from '../../components/charts';
import type { TierBreakdownData } from '../../types';

const LineChart = lazy(() => import('../../components/charts/LineChart').then(m => ({ default: m.LineChart })));
const BarChart = lazy(() => import('../../components/charts/BarChart').then(m => ({ default: m.BarChart })));
const PieChart = lazy(() => import('../../components/charts/PieChart').then(m => ({ default: m.PieChart })));
const DowntimeTable = lazy(() => import('./DowntimeTable').then(m => ({ default: m.DowntimeTable })));

const DEFAULT_FILTERS: FilterParams = {
  startMonth: '2025-03',
  endMonth: '2026-02',
};

export const Dashboard = () => {
  const [filters, setFilters] = useState<FilterParams>(DEFAULT_FILTERS);
  const { revenue, signups, downtimes, loading } = useMockData(filters);

  const { isLoading: revenueLoading } = useRevenue(filters.startMonth, filters.endMonth);
  const { isLoading: signupsLoading } = useSignups(filters.startMonth, filters.endMonth);
  const { data: tierDistributionData, isLoading: tierLoading } = useTierDistribution(
    filters.startMonth,
    filters.endMonth
  );
  const { isLoading: downtimesLoading } = useDowntimes(filters.startMonth, filters.endMonth);

  const revenueChartData = revenue as unknown as ChartData[];
  const signupsChartData = signups as unknown as ChartData[];

  const latestTier = tierDistributionData?.[tierDistributionData.length - 1];
  const tierChartData: TierBreakdownData[] = latestTier
    ? [
        { tier: 'Free', value: latestTier.free },
        { tier: 'Pro', value: latestTier.pro },
        { tier: 'Enterprise', value: latestTier.enterprise },
      ]
    : [];

  const queryChartData = tierChartData as unknown as ChartData[];

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Pulse Marketing Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        SaaS metrics overview: revenue, user growth, subscription breakdown, and system health
      </Typography>

      <FilterBar filters={filters} onFiltersChange={setFilters} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <ErrorBoundary>
              <LoadingBoundary isLoading={revenueLoading}>
                <LineChart
                  title="Revenue Trend"
                  data={revenueChartData}
                  xAxisKey="month"
                  dataKeys={[
                    { key: 'amount', color: CHART_COLORS.primary, name: 'Revenue' },
                  ]}
                  loading={loading}
                />
              </LoadingBoundary>
            </ErrorBoundary>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <ErrorBoundary>
              <LoadingBoundary isLoading={signupsLoading}>
                <BarChart
                  title="User Growth"
                  data={signupsChartData}
                  xAxisKey="month"
                  dataKeys={[
                    { key: 'count', color: CHART_COLORS.success, name: 'New Signups' },
                  ]}
                  loading={loading}
                />
              </LoadingBoundary>
            </ErrorBoundary>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <ErrorBoundary>
              <LoadingBoundary isLoading={tierLoading}>
                <PieChart
                  title="Subscription Breakdown"
                  data={queryChartData}
                  dataKey="value"
                  nameKey="tier"
                  innerRadius={60}
                  outerRadius={100}
                  loading={loading}
                />
              </LoadingBoundary>
            </ErrorBoundary>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <ErrorBoundary>
              <LoadingBoundary isLoading={downtimesLoading}>
                <DowntimeTable data={downtimes} loading={loading} />
              </LoadingBoundary>
            </ErrorBoundary>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

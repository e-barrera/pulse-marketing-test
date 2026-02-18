import { useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { FilterBar } from './FilterBar';
import { DowntimeTable } from './DowntimeTable';
import { LineChart, BarChart, PieChart, type ChartData } from '../../components/charts';
import { useMockData, type FilterParams } from '../../hooks';
import { CHART_COLORS } from '../../components/charts';

const DEFAULT_FILTERS: FilterParams = {
  startMonth: '2025-03',
  endMonth: '2026-02',
};

export const Dashboard = () => {
  const [filters, setFilters] = useState<FilterParams>(DEFAULT_FILTERS);
  const { revenue, signups, latestTierBreakdown, downtimes, loading } = useMockData(filters);

  const revenueChartData = revenue as unknown as ChartData[];
  const signupsChartData = signups as unknown as ChartData[];
  const tierChartData = latestTierBreakdown as unknown as ChartData[];

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
            <LineChart
              title="Revenue Trend"
              data={revenueChartData}
              xAxisKey="month"
              dataKeys={[
                { key: 'amount', color: CHART_COLORS.primary, name: 'Revenue' },
              ]}
              loading={loading}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <BarChart
              title="User Growth"
              data={signupsChartData}
              xAxisKey="month"
              dataKeys={[
                { key: 'count', color: CHART_COLORS.success, name: 'New Signups' },
              ]}
              loading={loading}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <PieChart
              title="Subscription Breakdown"
              data={tierChartData}
              dataKey="value"
              nameKey="tier"
              innerRadius={60}
              outerRadius={100}
              loading={loading}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <DowntimeTable data={downtimes} loading={loading} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

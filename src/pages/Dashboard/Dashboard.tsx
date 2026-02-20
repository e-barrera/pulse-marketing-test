import { useState, lazy } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { FilterBar } from './FilterBar';
import { type FilterParams } from '../../hooks';

const RevenueChart = lazy(() =>
  import('./RevenueChart').then((m) => ({ default: m.RevenueChart }))
);
const UserGrowthChart = lazy(() =>
  import('./UserGrowthChart').then((m) => ({ default: m.UserGrowthChart }))
);
const SubscriptionChart = lazy(() =>
  import('./SubscriptionChart').then((m) => ({ default: m.SubscriptionChart }))
);
const DowntimeTable = lazy(() =>
  import('./DowntimeTable').then((m) => ({ default: m.DowntimeTable }))
);

const DEFAULT_FILTERS: FilterParams = {
  startMonth: '2025-03',
  endMonth: '2026-02',
};

export const Dashboard = () => {
  const [ filters, setFilters ] = useState<FilterParams>(DEFAULT_FILTERS);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: '24px', md: '2rem' },
        py: 3,
      }}
    >
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
            <RevenueChart
              startMonth={filters.startMonth}
              endMonth={filters.endMonth}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <UserGrowthChart
              startMonth={filters.startMonth}
              endMonth={filters.endMonth}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <SubscriptionChart
              startMonth={filters.startMonth}
              endMonth={filters.endMonth}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <DowntimeTable
              startMonth={filters.startMonth}
              endMonth={filters.endMonth}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

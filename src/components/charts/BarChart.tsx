import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography, Skeleton } from '@mui/material';
import { CustomTooltip } from './CustomTooltip';
import type { CartesianChartProps } from './types';
import { formatMonth } from '../../utils/formatter';
import { DEFAULT_COLORS } from '../../utils/constants';

interface BarChartProps extends CartesianChartProps {
  stacked?: boolean;
}

export const BarChart = ({
  data,
  xAxisKey,
  dataKeys,
  height = 400,
  showGrid = true,
  showLegend = true,
  title,
  loading,
  stacked = false,
}: BarChartProps) => {
  const chartHeight = title ? height - 32 : height;

  if (loading) {
    return (
      <Box sx={{ width: '100%', height }}>
        {title && (
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {title}
          </Typography>
        )}
        <Skeleton variant="rectangular" width="100%" height={chartHeight} sx={{ borderRadius: 1 }} />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', height }}>
      {title && (
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>
      )}
      <ResponsiveContainer width="100%" height={chartHeight}>
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />}
          <XAxis
            dataKey={xAxisKey}
            tickFormatter={formatMonth}
            tick={{ fontSize: 12 }}
            stroke="#9e9e9e"
          />
          <YAxis
            tickFormatter={formatYAxis}
            tick={{ fontSize: 12 }}
            stroke="#9e9e9e"
          />
          <Tooltip content={<CustomTooltip />} />
          {showLegend && <Legend />}
          {dataKeys.map((dataKey, index) => (
            <Bar
              key={dataKey.key}
              dataKey={dataKey.key}
              name={dataKey.name || dataKey.key}
              fill={dataKey.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
              radius={[4, 4, 0, 0]}
              stackId={stacked ? 'stack' : undefined}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </Box>
  );
};

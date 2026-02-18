import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { PieLabelRenderProps } from 'recharts';
import { Box, Typography, Skeleton, Paper } from '@mui/material';
import type { PieChartProps } from './types';
import { CHART_COLORS } from './types';

const DEFAULT_COLORS = [CHART_COLORS.free, CHART_COLORS.pro, CHART_COLORS.enterprise, CHART_COLORS.primary];

const RADIAN = Math.PI / 180;

const renderCustomLabel = (props: PieLabelRenderProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  
  if (
    typeof cx !== 'number' ||
    typeof cy !== 'number' ||
    typeof midAngle !== 'number' ||
    typeof innerRadius !== 'number' ||
    typeof outerRadius !== 'number' ||
    typeof percent !== 'number'
  ) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent < 0.05) return null;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; payload: { fill: string } }> }) => {
  if (!active || !payload?.length) return null;

  const data = payload[0];

  return (
    <Paper
      sx={{
        p: 1.5,
        boxShadow: 3,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            width: 12,
            height: 12,
            bgcolor: data.payload.fill,
            borderRadius: '50%',
          }}
        />
        <Typography variant="body2">
          <strong>{data.name}</strong>: {data.value.toLocaleString()}
        </Typography>
      </Box>
    </Paper>
  );
};

export const PieChart = ({
  data,
  dataKey,
  nameKey,
  height = 400,
  showLegend = true,
  title,
  loading,
  innerRadius = 60,
  outerRadius = 100,
}: PieChartProps) => {
  const chartHeight = title ? height - 32 : height;

  if (loading) {
    return (
      <Box sx={{ width: '100%', height }}>
        {title && (
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {title}
          </Typography>
        )}
        <Skeleton variant="circular" width={chartHeight - 20} height={chartHeight - 20} sx={{ mx: 'auto' }} />
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
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey={dataKey}
            nameKey={nameKey}
            labelLine={false}
            label={renderCustomLabel}
            paddingAngle={2}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
                stroke="white"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomPieTooltip />} />
          {showLegend && (
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span style={{ color: '#666', fontSize: 12 }}>{value}</span>
              )}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </Box>
  );
};

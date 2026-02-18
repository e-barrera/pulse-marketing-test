import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Box } from '@mui/material';
import { BaseChart } from './BaseChart';
import { CustomTooltip } from './CustomTooltip';
import type { CartesianChartProps } from './types';
import { formatMonth, formatYAxis } from '../../utils/formatter';
import type { DEFAULT_COLORS } from '../../utils/constants';

export const LineChart = ({
  data,
  xAxisKey,
  dataKeys,
  height = 400,
  showGrid = true,
  showLegend = true,
  title,
  loading,
}: CartesianChartProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <BaseChart title={title} height={height} loading={loading}>
        <RechartsLineChart
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
          <Tooltip content={<CustomTooltip isCurrency />} />
          {showLegend && <Legend />}
          {dataKeys.map((dataKey, index) => (
            <Line
              key={dataKey.key}
              type="monotone"
              dataKey={dataKey.key}
              name={dataKey.name || dataKey.key}
              stroke={dataKey.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </RechartsLineChart>
      </BaseChart>
    </Box>
  );
};

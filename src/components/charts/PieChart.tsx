import {
	PieChart as RechartsPieChart,
	Pie,
	Cell,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { Box, Typography, Skeleton } from '@mui/material';
import type { PieChartProps } from './types';
import { PIE_COLORS } from '../../utils/constants';
import { renderCustomLabel } from './PieChartLabel';
import { PieChartTooltip } from './PieChartTooltip';

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
								fill={PIE_COLORS[index % PIE_COLORS.length]}
								stroke="white"
								strokeWidth={2}
							/>
						))}
					</Pie>
					<Tooltip content={<PieChartTooltip />} />
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

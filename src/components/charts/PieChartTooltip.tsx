import { Paper, Typography, Box } from '@mui/material';

interface PieChartTooltipProps {
	active?: boolean;
	payload?: Array<{
		name: string;
		value: number;
		payload: { fill: string };
	}>;
}

export const PieChartTooltip = ({ active, payload }: PieChartTooltipProps) => {
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

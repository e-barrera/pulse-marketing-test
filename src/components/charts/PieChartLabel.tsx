import type { PieLabelRenderProps } from 'recharts';
import { RADIAN } from '../../utils/constants';

export const renderCustomLabel = (props: PieLabelRenderProps) => {
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

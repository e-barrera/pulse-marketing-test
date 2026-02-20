import { MONTH_NAMES, SERVICE_COLORS, type ServiceColor } from './constants';

export const formatMonth = (month: string): string => {
	if (!month || !month.includes('-')) return month;
	const parts = month.split('-');
	const monthNum = parts[1];
	const monthIndex = parseInt(monthNum, 10) - 1;
	return `${MONTH_NAMES[monthIndex]}`;
};

export const formatMonthLabel = (month: string): string => {
	if (!month || !month.includes('-')) return month;
	const [year, monthNum] = month.split('-');
	const monthIndex = parseInt(monthNum, 10) - 1;
	return `${MONTH_NAMES[monthIndex]} ${year}`;
};

export const formatYAxis = (value: number): string => {
	if (value >= 1000) {
		return `${(value / 1000).toFixed(0)}k`;
	}
	return `${value}`;
};

export const formatValue = (value: number, isCurrency?: boolean): string => {
	if (isCurrency) {
		if (value >= 1000) {
			return `$${(value / 1000).toFixed(1)}k`;
		}
		return `$${value.toLocaleString()}`;
	}
	return value.toLocaleString();
};

export const formatDate = (isoString: string): string => {
	const date = new Date(isoString);
	return date.toLocaleString('en-US', {
		month: 'short',
		day: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	});
};

export const getServiceColor = (service: string): ServiceColor => {
	return SERVICE_COLORS[service] || 'default';
};

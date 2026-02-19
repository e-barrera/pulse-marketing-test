export const MONTH_NAMES = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
] as const;

export const CHART_COLORS = {
	primary: '#1976d2',
	secondary: '#dc004e',
	success: '#82ca9d',
	warning: '#ffc658',
	info: '#8884d8',
	free: '#8884d8',
	pro: '#82ca9d',
	enterprise: '#ffc658',
} as const;

export const DEFAULT_COLORS = [
	CHART_COLORS.primary,
	CHART_COLORS.success,
	CHART_COLORS.warning,
	CHART_COLORS.info,
] as const;

export const PIE_COLORS = [
	CHART_COLORS.free,
	CHART_COLORS.pro,
	CHART_COLORS.enterprise,
	CHART_COLORS.primary,
] as const;

export const AVAILABLE_MONTHS = [
	'2025-03',
	'2025-04',
	'2025-05',
	'2025-06',
	'2025-07',
	'2025-08',
	'2025-09',
	'2025-10',
	'2025-11',
	'2025-12',
	'2026-01',
	'2026-02',
] as const;

export const RADIAN = Math.PI / 180;

export type ServiceColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export const SERVICE_COLORS: Record<string, ServiceColor> = {
	All: 'error',
	API: 'primary',
	Login: 'secondary',
	Dashboard: 'info',
	Billing: 'warning',
	Notifications: 'success',
	'Static Assets': 'default',
} as const;

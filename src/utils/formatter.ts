export const formatMonth = (month: string): string => {
	if (!month || !month.includes("-")) return month;
	const parts = month.split("-");
	const monthNum = parts[1];
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const monthIndex = parseInt(monthNum, 10) - 1;
	return `${monthNames[monthIndex]}`;
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

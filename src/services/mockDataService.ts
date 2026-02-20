import type { DataService } from './types';
import type {
	RevenueItem,
	SignupItem,
	TierDistributionItem,
	DowntimeItem,
} from '../types';
import mockSaaSData from '../mock/data';
import { getAvailableMonths } from '../mock/data';

const filterByMonthRange = <T extends { month: string }>(
	data: T[],
	startMonth: string,
	endMonth: string
): T[] => {
	return data.filter((item) => item.month >= startMonth && item.month <= endMonth);
};

const filterDowntimesByMonthRange = (
	downtimes: DowntimeItem[],
	startMonth: string,
	endMonth: string
): DowntimeItem[] => {
	return downtimes.filter((downtime) => {
		const downtimeMonth = downtime.start.substring(0, 7);
		return downtimeMonth >= startMonth && downtimeMonth <= endMonth;
	});
};

export const mockDataService: DataService = {
	getAvailableMonths,

	getRevenue: async (startMonth: string, endMonth: string): Promise<RevenueItem[]> => {
		return filterByMonthRange(mockSaaSData.revenue, startMonth, endMonth);
	},

	getSignups: async (startMonth: string, endMonth: string): Promise<SignupItem[]> => {
		return filterByMonthRange(mockSaaSData.signups, startMonth, endMonth);
	},

	getTierDistribution: async (startMonth: string, endMonth: string): Promise<TierDistributionItem[]> => {
		return filterByMonthRange(mockSaaSData.tierDistribution, startMonth, endMonth);
	},

	getDowntimes: async (startMonth: string, endMonth: string): Promise<DowntimeItem[]> => {
		return filterDowntimesByMonthRange(mockSaaSData.downtimes, startMonth, endMonth);
	},
};

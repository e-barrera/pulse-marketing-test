import type { RevenueItem, SignupItem, TierDistributionItem, DowntimeItem } from '../mock/data';

export interface DataService {
	getAvailableMonths(): string[];
	getRevenue(startMonth: string, endMonth: string): Promise<RevenueItem[]>;
	getSignups(startMonth: string, endMonth: string): Promise<SignupItem[]>;
	getTierDistribution(startMonth: string, endMonth: string): Promise<TierDistributionItem[]>;
	getDowntimes(startMonth: string, endMonth: string): Promise<DowntimeItem[]>;
}

export interface RevenueItem {
	month: string;
	amount: number;
}

export interface SignupItem {
	month: string;
	count: number;
}

export interface TierDistributionItem {
	month: string;
	free: number;
	pro: number;
	enterprise: number;
}

export interface DowntimeItem {
	id: number;
	start: string;
	end: string;
	durationMinutes: number;
	description: string;
	affectedServices: string[];
}

export interface MockSaaSData {
	revenue: RevenueItem[];
	signups: SignupItem[];
	tierDistribution: TierDistributionItem[];
	downtimes: DowntimeItem[];
}

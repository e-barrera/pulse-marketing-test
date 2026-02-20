import type {
	RevenueItem,
	SignupItem,
	TierDistributionItem,
	DowntimeItem,
} from './api';

export type RevenueData = RevenueItem;
export type SignupData = SignupItem;
export type TierDistributionData = TierDistributionItem;
export type DowntimeData = DowntimeItem;

export interface TierBreakdownData {
	tier: string;
	value: number;
}

export interface MockDataState {
	revenue: RevenueData[];
	signups: SignupData[];
	tierDistribution: TierDistributionData[];
	latestTierBreakdown: TierBreakdownData[];
	downtimes: DowntimeData[];
	loading: boolean;
}

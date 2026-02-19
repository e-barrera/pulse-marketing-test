import { useState, useEffect, useRef } from 'react';
import mockSaaSData, { 
  type RevenueItem, 
  type SignupItem, 
  type TierDistributionItem, 
  type DowntimeItem 
} from '../mock/data';
import { getAvailableMonths } from '../mock/data';
import { formatMonthLabel } from '../utils/formatter';

export interface FilterParams {
  startMonth: string;
  endMonth: string;
}

export interface RevenueData {
  month: string;
  amount: number;
}

export interface SignupData {
  month: string;
  count: number;
}

export interface TierDistributionData {
  month: string;
  free: number;
  pro: number;
  enterprise: number;
}

export interface TierBreakdownData {
  tier: string;
  value: number;
}

export interface DowntimeData {
  id: number;
  start: string;
  end: string;
  durationMinutes: number;
  description: string;
  affectedServices: string[];
}

export interface MockDataState {
  revenue: RevenueData[];
  signups: SignupData[];
  tierDistribution: TierDistributionData[];
  latestTierBreakdown: TierBreakdownData[];
  downtimes: DowntimeData[];
  loading: boolean;
}

const filterRevenue = (
  data: RevenueItem[],
  startMonth: string,
  endMonth: string
): RevenueData[] => {
  return data.filter((item: RevenueItem) => item.month >= startMonth && item.month <= endMonth);
};

const filterSignups = (
  data: SignupItem[],
  startMonth: string,
  endMonth: string
): SignupData[] => {
  return data.filter((item: SignupItem) => item.month >= startMonth && item.month <= endMonth);
};

const filterTierDistribution = (
  data: TierDistributionItem[],
  startMonth: string,
  endMonth: string
): TierDistributionData[] => {
  return data.filter((item: TierDistributionItem) => item.month >= startMonth && item.month <= endMonth);
};

const filterDowntimes = (
  downtimes: DowntimeItem[],
  startMonth: string,
  endMonth: string
): DowntimeData[] => {
  return downtimes.filter((downtime: DowntimeItem) => {
    const downtimeMonth = downtime.start.substring(0, 7);
    return downtimeMonth >= startMonth && downtimeMonth <= endMonth;
  });
};

const computeFilteredData = (filters: FilterParams): Omit<MockDataState, 'loading'> => {
  const filteredRevenue = filterRevenue(
    mockSaaSData.revenue,
    filters.startMonth,
    filters.endMonth
  );

  const filteredSignups = filterSignups(
    mockSaaSData.signups,
    filters.startMonth,
    filters.endMonth
  );

  const filteredTierDistribution = filterTierDistribution(
    mockSaaSData.tierDistribution,
    filters.startMonth,
    filters.endMonth
  );

  const filteredDowntimes = filterDowntimes(
    mockSaaSData.downtimes,
    filters.startMonth,
    filters.endMonth
  );

  const latestTier = filteredTierDistribution[filteredTierDistribution.length - 1];
  const latestTierBreakdown: TierBreakdownData[] = latestTier
    ? [
        { tier: 'Free', value: latestTier.free },
        { tier: 'Pro', value: latestTier.pro },
        { tier: 'Enterprise', value: latestTier.enterprise },
      ]
    : [];

  return {
    revenue: filteredRevenue,
    signups: filteredSignups,
    tierDistribution: filteredTierDistribution,
    latestTierBreakdown,
    downtimes: filteredDowntimes,
  };
};

export const useMockData = (filters: FilterParams): MockDataState => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Omit<MockDataState, 'loading'>>(() => computeFilteredData(filters));
  const previousFiltersRef = useRef<string>(`${filters.startMonth}-${filters.endMonth}`);

  useEffect(() => {
    const filterKey = `${filters.startMonth}-${filters.endMonth}`;
    
    if (filterKey === previousFiltersRef.current) {
      return;
    }
    
    previousFiltersRef.current = filterKey;

    const timeoutId = setTimeout(() => {
      const filteredData = computeFilteredData(filters);
      setData(filteredData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [filters]);

  return {
    ...data,
    loading,
  };
};

export { getAvailableMonths, formatMonthLabel };

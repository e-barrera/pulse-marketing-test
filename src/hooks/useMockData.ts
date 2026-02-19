import { useState, useEffect, useRef } from 'react';
import mockSaaSData from '../mock/data';
import { getAvailableMonths } from '../mock/data';
import { formatMonthLabel } from '../utils/formatter';
import type {
	FilterParams,
	RevenueData,
	SignupData,
	TierDistributionData,
	TierBreakdownData,
	DowntimeData,
	MockDataState,
	RevenueItem,
	SignupItem,
	TierDistributionItem,
	DowntimeItem,
} from '../types';

const filterRevenue = (
  data: RevenueItem[],
  startMonth: string,
  endMonth: string
): RevenueData[] => {
  return data.filter((item) => item.month >= startMonth && item.month <= endMonth);
};

const filterSignups = (
  data: SignupItem[],
  startMonth: string,
  endMonth: string
): SignupData[] => {
  return data.filter((item) => item.month >= startMonth && item.month <= endMonth);
};

const filterTierDistribution = (
  data: TierDistributionItem[],
  startMonth: string,
  endMonth: string
): TierDistributionData[] => {
  return data.filter((item) => item.month >= startMonth && item.month <= endMonth);
};

const filterDowntimes = (
  downtimes: DowntimeItem[],
  startMonth: string,
  endMonth: string
): DowntimeData[] => {
  return downtimes.filter((downtime) => {
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
export type {
	FilterParams,
	RevenueData,
	SignupData,
	TierDistributionData,
	TierBreakdownData,
	DowntimeData,
	MockDataState,
};

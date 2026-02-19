import { useQuery } from "@tanstack/react-query";
import { dataService } from "../services";
import type { TierDistributionItem } from "../types";

export const useTierDistribution = (startMonth: string, endMonth: string) => {
	return useQuery<TierDistributionItem[], Error>({
		queryKey: ["tierDistribution", startMonth, endMonth],
		queryFn: () => dataService.getTierDistribution(startMonth, endMonth),
	});
};

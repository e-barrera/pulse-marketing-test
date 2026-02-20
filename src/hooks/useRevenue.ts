import { useQuery } from "@tanstack/react-query";
import { dataService } from "../services";
import type { RevenueItem } from "../types";

export const useRevenue = (startMonth: string, endMonth: string) => {
	return useQuery<RevenueItem[], Error>({
		queryKey: ["revenue", startMonth, endMonth],
		queryFn: () => dataService.getRevenue(startMonth, endMonth),
	});
};

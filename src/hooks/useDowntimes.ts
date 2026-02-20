import { useQuery } from "@tanstack/react-query";
import { dataService } from "../services";
import type { DowntimeItem } from "../types";

export const useDowntimes = (startMonth: string, endMonth: string) => {
	return useQuery<DowntimeItem[], Error>({
		queryKey: ["downtimes", startMonth, endMonth],
		queryFn: () => dataService.getDowntimes(startMonth, endMonth),
	});
};

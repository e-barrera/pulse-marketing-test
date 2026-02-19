import { useQuery } from "@tanstack/react-query";
import { dataService } from "../services";
import type { SignupItem } from "../types";

export const useSignups = (startMonth: string, endMonth: string) => {
	return useQuery<SignupItem[], Error>({
		queryKey: ["signups", startMonth, endMonth],
		queryFn: () => dataService.getSignups(startMonth, endMonth),
	});
};

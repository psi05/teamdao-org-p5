import { ILog } from "@/types";
import useSWR from "swr";
import { z } from "zod";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function LogInfo(): {
	logData: { logs: z.infer<typeof ILog>[] };
	logDataLoading: boolean;
	logDataError: boolean;
} {
	const { data, error } = useSWR("/api/get-data/logs", fetcher, {
		shouldRetryOnError: true,
		revalidateOnMount: true,
		revalidateOnFocus: true,
		revalidateOnReconnect: true,
		refreshWhenHidden: true,
		refreshWhenOffline: true,
		refreshInterval: 5000,
	});

	return {
		logData: data,
		logDataLoading: !error && !data,
		logDataError: !!error,
	};
}

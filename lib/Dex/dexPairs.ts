import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DexData() {
	const { data, error, isValidating } = useSWR(
		"https://api.dexscreener.com/latest/dex/pairs/base/0xbE09Cf0159f752d9bf1A9324e55F108e2e2D5500",
		fetcher,
		{
			shouldRetryOnError: true,
			revalidateOnMount: true,
			revalidateOnFocus: true,
			revalidateOnReconnect: true,
			refreshWhenHidden: true,
			refreshWhenOffline: true,
			refreshInterval: 5000,
		}
	);

	return {
		dexPairs: data,
		dexPairsLoading: !data && !error,
		dexPairsError: !!error,
	};
}

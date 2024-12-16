import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BlockscoutTokenInfo() {
	const { data, error, isValidating } = useSWR(
		"https://base.blockscout.com/api/v2/addresses/0x9BADA086BAE4962037f14B0e79BaEa62e972dD21",
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
		BSTokenInfo: data,
		BSTokenInfoLoading: !data && !error,
		BSTokenInfoError: !!error,
	};
}

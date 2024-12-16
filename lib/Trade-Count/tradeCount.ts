import useSWR from "swr";
import { z } from "zod";

const TradeCountSchema = z.object({
  data: z.object({
    EVM: z.object({
      DEXTradeByTokens: z.array(
        z.object({
          TradeCount: z.string(),
        }),
      ),
    }),
  }),
});

const fetcher = (url: string) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query test {
          EVM(dataset: combined, network: base) {
            DEXTradeByTokens(
              orderBy: {descendingByField: "TradeCount"}
              where: {
                Trade: {
                  Currency: {
                    SmartContract: {
                      is: "0x9BADA086BAE4962037f14B0e79BaEa62e972dD21"
                    }
                  }
                }
              }
            ) {
              TradeCount: count
            }
          }
        }
      `,
      variables: {
        network: "base",
        since: "2024-06-08T12:19:45.059Z",
        factory: ["0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6"],
        weth: "0x9BADA086BAE4962037f14B0e79BaEa62e972dD21",
        limit: 25,
      },
    }),
  }).then((res) => res.json());

export default function TradeCount(): {
  tradeData: z.infer<typeof TradeCountSchema> | undefined;
  tradeDataLoading: boolean;
  tradeDataError: boolean;
} {
  const { data, error } = useSWR("/api/trade-count", fetcher, {
    shouldRetryOnError: true,
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: true,
    refreshWhenOffline: true,
    refreshInterval: 5000,
  });

  // Validate the data using the Zod schema
  const parsedData = TradeCountSchema.safeParse(data);

  return {
    tradeData: parsedData.success ? parsedData.data : undefined,
    tradeDataLoading: !error && !data,
    tradeDataError: !!error,
  };
}

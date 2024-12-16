import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.BITQUERY_API_KEY;
  const authorizationToken = process.env.BITQUERY_AUTH_TOKEN;

  if (!apiKey || !authorizationToken) {
    return NextResponse.json(
      { error: "API key or Authorization token is missing" },
      { status: 500 },
    );
  }

  const query = `
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
  `;
  const variables = {
    network: "base",
    since: "2024-06-08T12:19:45.059Z",
    factory: ["0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6"],
    weth: "0x9BADA086BAE4962037f14B0e79BaEa62e972dD21",
    limit: 25,
  };

  const body = JSON.stringify({ query, variables });

  const response = await fetch("https://streaming.bitquery.io/eap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
      Authorization: `Bearer ${authorizationToken}`,
    },
    body,
  });

  const data = await response.json();

  return NextResponse.json(data);
}

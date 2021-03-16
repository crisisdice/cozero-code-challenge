export interface CryptoData {
  market_data: { price_change_percentage_24h: number; current_price: { usd: number } }
  image: { small: string }
  name: string
  market_cap_rank: number
  symbol: string
  id: string
}

export interface CryptoGraph {
  prices: [number, number][]
}
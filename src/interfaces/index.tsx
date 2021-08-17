export interface CurrenciesInterface {
  type: 'USD' | 'ETH' | 'BTC' | 'LTC'
}

export interface ExchangeInterface {
  data: {
    currency: string,
    rates: {
      [key: string]: number
    }
  }
}
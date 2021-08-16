import { atom } from "recoil";

export interface CurrencyContent {
  type: 'USD' | 'ETH' | 'BTC' | 'LTC';
}

const initialState: CurrencyContent = {
  type: 'USD'
};

export const currencyContentState = atom<CurrencyContent>({
  key: "currencyContents",
  default: initialState,
});

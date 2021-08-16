import { atom } from "recoil";

export interface PricesContent {
	BTC: number,
	ETH: number,
	LTC: number,
	USD: number,
}

const initialState: PricesContent = {
	BTC: 0,
	ETH: 0,
	LTC: 0,
	USD: 1
};

export const pricesContentState = atom<PricesContent>({
  key: "PricesContents",
  default: initialState,
});

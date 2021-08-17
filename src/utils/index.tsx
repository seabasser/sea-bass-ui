import useFetch from "../hooks/useFetch";

export const capitalizeFirstLetter = (string:string):string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// get params from url
export const getParams = (param: string):string => {
  return param.split("=")[1];
}

// gets the current exhcnage rates for crypto currencies
export const getCryptoPrices = ():any => {
  const url = 'https://api.coinbase.com/v2/exchange-rates?currency=USD';
  const { data, error } = useFetch(url);
  return { data, error };
}

// converts price and limits decimal places
export const normalizePrice = (price: number, exchangeRate: number, digitsPastDecimal: number):number => {
  return parseFloat((exchangeRate * price).toFixed(digitsPastDecimal)); // sub for current price later
}

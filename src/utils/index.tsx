import useFetch from "../hooks/useFetch";

export const capitalizeFirstLetter = (string:string):string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getParams = (param: string):string => {
  return param.split("=")[1];
}

export const getCryptoPrices = () => {
  const url = 'https://api.coinbase.com/v2/exchange-rates?currency=USD';
  const { data } = useFetch(url);
  return data;
}
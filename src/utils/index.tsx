export const capitalizeFirstLetter = (string:string):string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// get params from url
export const getParams = (param: string):string => {
  return decodeURI(param.split('=')[1]);
}

// converts price and limits decimal places
export const normalizePrice = (price: number, exchangeRate: number, digitsPastDecimal: number):number => {
  return parseFloat((exchangeRate * price).toFixed(digitsPastDecimal)); // sub for current price later
}

// Checks drink and sends appropriate message depending on the drink
export const checkDrinkError = (drink: string):string => {
  switch (drink) {
  case 'Alcohol':
    return 'Drink it strait, its the fastest way to reach your goal!'
    break;

  default:
    return 'We just hit an error :('
  }
}

// Gets Error Header based on the passed in drink
export const getErrorHeader = (drink: string):string => {
  switch (drink) {
  case 'Alcohol':
    return 'You dug this grave yourself'
    break;

  default:
    return 'oh, fiddlesticks!'
    break;
  }
}
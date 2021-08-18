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
export const checkDrinkError = (drink: string):string | undefined => {
  if (drink === 'Alcohol') {
    return 'Drink . It . Strait'
  }

  return undefined
}

// Gets Error Header based on the passed in drink
export const getErrorHeader = (drink: string):string | undefined => {
  if (drink === 'Alcohol') {
    return 'You dug this grave yourself'
  }

  return undefined
}
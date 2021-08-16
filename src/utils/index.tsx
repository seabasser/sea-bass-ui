export const capitalizeFirstLetter = (string:string):string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getParams = (param: string):string => {
  return param.split("=")[1];
}

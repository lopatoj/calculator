export function isDigit(char) {
  return "0123456789".indexOf(char) !== -1;
}

export function isNumber(num) {
  return !isNaN(num);
}

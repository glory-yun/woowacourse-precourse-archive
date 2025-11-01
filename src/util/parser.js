export function parser(numbers) {
  const parsedInput = numbers
    .split(',')
    .filter(number => number.length > 0)
    .map(number => Number(number));

  return parsedInput;
}
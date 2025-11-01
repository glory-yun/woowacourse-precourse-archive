export function formatMatchPrice(price) {
  return price.toLocaleString();
}

export function formatRateOfResult(rate) {
  return rate.toLocaleString('ko-KR', { minimumFractionDigits: 1 });
}

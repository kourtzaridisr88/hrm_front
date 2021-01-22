const MoneyFormat = currency => new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: currency
});

export default MoneyFormat;
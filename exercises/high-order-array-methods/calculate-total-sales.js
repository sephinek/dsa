function calculateTotalSales(products, taxRate) {
  const sum = products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const tax = (sum * taxRate) / 100;
  return sum + tax;
}

module.exports = calculateTotalSales;

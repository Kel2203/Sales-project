import { SalesByPaymentMethod, SalesByStore } from './types';

export const buildSalesByStoreChart = (sales: SalesByStore[]) => {
  const lebels = sales.map((sale) => sale.storeName);
  const series = sales.map((sale) => sale.sum);

  return {
    labels: lebels,
    series: series
  };
};

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethod[]) => {
  const lebels = sales.map((sale) => sale.description);
  const series = sales.map((sale) => sale.sum);

  return {
    labels: lebels,
    series: series
  };
};

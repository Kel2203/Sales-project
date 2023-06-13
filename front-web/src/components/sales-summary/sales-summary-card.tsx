import './styles.css';

import React from 'react';

type Props = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

function SalesSummaryCard({ label, value, icon }: Props) {
  return (
    <div className="sales-summary-card base-card">
      {icon}
      <h3 className="sales-summary-card-value">{value}</h3>
      <span className="sales-summary-card-label">{label}</span>
    </div>
  );
}

export default SalesSummaryCard;

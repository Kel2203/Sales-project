import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={340} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={272} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={168} label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value={302} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;

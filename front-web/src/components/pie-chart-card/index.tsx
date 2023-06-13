import { buildPieChartConfig } from './helpers';
import './styles.css';
import ReactApexChart from 'react-apexcharts';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function PieChartCard({ labels, name, series }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        series={series}
        type="donut"
        width="400px"
      />
    </div>
  );
}

export default PieChartCard;

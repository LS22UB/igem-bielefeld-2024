import {PieChartProps} from "../../interfaces/pieChartProps.ts";
import {Pie} from "react-chartjs-2";
import {pieoption} from "../../data/charts/piecharts.ts";
import { Chart as ChartJS, Tooltip, Legend,ArcElement, BarElement, CategoryScale, LinearScale, Title, RadialLinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    RadialLinearScale,
    LinearScale,
    BarElement,
    Title);


export function PieChart(props: PieChartProps) {
    return (
        <div className="pie-chart-container-small">
            <Pie data={props.data} options={pieoption} />
        </div>
    );
}
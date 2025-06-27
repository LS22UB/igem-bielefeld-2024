import {PieChartProps} from "../../interfaces/pieChartProps.ts";
import {Pie} from "react-chartjs-2";


export function PieChart(props: PieChartProps) {
    return (
        <div className="pie-chart-container-small">
            <Pie data={props.data} options={props.options} />
        </div>
    );
};
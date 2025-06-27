export interface dataset {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
}

export interface labels {
    boxWidth: number, // Controls the size of the color box next to the labels
    padding: number,   // Adds some padding between labels and the chart
    usePointStyle: boolean,
}

export interface legend {
    display: boolean, // possible to blend out legend
    position: 'bottom', // Puts labels below the chart
    labels: labels,
}

export interface plugins {
    legend?: legend,
    title: {
        display: boolean,
        text: string,
    },
}

export interface piedata {
    labels:  string[];
    datasets:  dataset[];
}

export interface pieoptions {
    responsive: boolean,
    maintainAspectRatio: boolean,
    plugins: plugins
}

export interface PieChartProps {
    data: piedata;
    chartoptions:  pieoptions;
}
import {backgroundcolorscale, bordercolorscale} from "./coloscales.ts";
import {piedata, pieoptions} from "../../interfaces/pieChartProps.ts";

export const mutationdata: piedata = {
    labels: ['indel', 'insertion', 'deletion', 'substitution', 'other'],
    datasets: [
        {
            label: 'Percentage',
            data: [
                0.004858000000000001,
                0.0008859999999999997,
                0.7264179999999972,
                0.2384159999999995,
                0.003703
            ],
            backgroundColor: backgroundcolorscale,
            borderColor: bordercolorscale,
            borderWidth: 1,
        },
    ],
};


export const pieoption: pieoptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true, // possible to blend out legend
            position: 'bottom' as const, // Puts labels below the chart
            labels: {
                boxWidth: 20, // Controls the size of the color box next to the labels
                padding: 15,   // Adds some padding between labels and the chart
                usePointStyle: true,
            },
        },
        title: {
            display: true,
            text: 'Types of mutations',
        },
    },
};
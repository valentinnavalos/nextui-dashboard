import React from 'react';
import { Box } from '../styles/box';
import Chart, { Props } from 'react-apexcharts';

const defaultState: Props['series'] = [
    {
        name: 'series-1',
        data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
        name: 'series-2',
        data: [11, 32, 45, 32, 34, 52, 41],
    },
];

const defaultCategories = [1991, 1992, 1993, 1994, 1995, 1996, 1997];

const getChartOptions = (userCategories: Props['xaxis']['categories']) => ({
    chart: {
        type: 'bar',
        animations: {
            easing: 'linear',
            speed: 300,
        },
        sparkline: {
            enabled: false,
        },
        brush: {
            enabled: false,
        },
        id: 'basic-bar',
        fontFamily: 'Inter, sans-serif',
        foreColor: 'var(--nextui-colors-accents9)',
        toolbar: {
            show: false,
        },
    },

    xaxis: {
        categories: userCategories || defaultCategories,
        labels: {
            // show: false,
            style: {
                colors: 'var(--nextui-colors-accents8)',
                fontFamily: 'Inter, sans-serif',
            },
        },
        axisBorder: {
            color: 'var(--nextui-colors-border)',
        },
        axisTicks: {
            color: 'var(--nextui-colors-border)',
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: 'var(--nextui-colors-accents8)',
                fontFamily: 'Inter, sans-serif',
            },
        },
    },
    tooltip: {
        enabled: false,
    },
    grid: {
        show: true,
        borderColor: 'var(--nextui-colors-border)',
        strokeDashArray: 0,
        position: 'back',
    },
    stroke: {
        curve: 'smooth',
        fill: {
            colors: ['red'],
        },
    },
    // @ts-ignore
    markers: false,
});

interface BarProps {
    series: Props['series'];
    categories: Props['xaxis']['categories'];
}

export const Bar = ({ series, categories }: BarProps) => {
    const options = getChartOptions(categories);

    return (
        <>
            <Box css={{ width: '100%', zIndex: 5 }}>
                <div id="chart">
                    <Chart
                        options={options}
                        series={series || defaultState}
                        type="bar"
                        height={425}
                    />
                </div>
            </Box>
        </>
    );
};
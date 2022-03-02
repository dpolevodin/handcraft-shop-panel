import React from 'react';
import style from './BarChart.module.css'
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
const data = [1, 2, 3, 5, 8, 13];

export const BarChart = () => (
  <Chart>
    <ChartSeries>
      <ChartSeriesItem data={data} name="Fibonacci" />
    </ChartSeries>
  </Chart>
);
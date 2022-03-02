import React from 'react';
import style from './DonutChart.module.css'
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { CHARTS_COLORS } from "../constants";

// Graph data
const applicationsStatusThisMonth = [
  {
    status: "Accepted",
    value: 14,
    color: CHARTS_COLORS.accepted,
  },
  {
    status: "Interviewing",
    value: 14,
    color: CHARTS_COLORS.interviewing,
  },
  {
    status: "Rejected",
    value: 40,
    color: CHARTS_COLORS.rejected,
  },
  {
    status: "Pending",
    value: 32,
    color: CHARTS_COLORS.pending,
  },
];

const renderTooltip = (context: any) => {
  const { category, value } = context.point || context;
  return (
    <div>
      {category}: {value}%
    </div>
  );
};

// Show category label for each item in the donut graph
const labelContent = (e: any) => e.category;

export const DonutChart = () => {
  return (
    <Chart className={style.wrapper}>
      <ChartTitle text="Applications status - this month" />
      <ChartLegend visible={false} />
      <ChartTooltip render={renderTooltip}/>
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={applicationsStatusThisMonth}
          categoryField="status"
          field="value"
        >
          <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  );
};
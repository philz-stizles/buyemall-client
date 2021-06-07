import { chartData } from "../../../data/chart-data";

export default function NextFC() {
  const FusionCharts = require("fusioncharts");
  const Column2D = require("fusioncharts/fusioncharts.charts");
  const FusionTheme = require("fusioncharts/themes/fusioncharts.theme.fusion.js");
  const { default: ReactFC } = require("react-fusioncharts");
  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",    //Set the chart caption
        subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
        xAxisName: "Country",           //Set the x-axis name
        yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData
    }
  }

  return <ReactFC {...chartConfigs} />;
}
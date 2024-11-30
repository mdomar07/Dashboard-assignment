import React from "react";
import Chart from "react-apexcharts";
import "./ChartComponent.css";

const ChartComponent = () => {
  const chartOptions = {
    series: [
      {
        name: "Activity",
        data: [3, 5, 6, 4, 5, 7, 6, 5, 10, 9, 11, 8, 5, 6, 9, 10, 8, 7, 12, 14, 15, 11],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '50%',
          barHeight: '80%', // Padding around the bars
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [5,'', 7, '',  9, '', 11, '', 13,  '', 15, '', 17, '',19, '',21,  '',23,'',25,'', 27],
        labels: {
          style: {
            colors: '#FFF',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#FFF',
          },
          categories: [0, 5, 10, 15], // Format y-axis labels as 0, 5k, 10k, 15k
        },
      },
      grid: {
        borderColor: '#555',
      },
      fill: {
        opacity: 0.8,
        colors: ['#4e8cff'],
      },
    },
  };

  return (
    <div className="chart-container">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        height={190}
      />
    </div>
  );
};

export default ChartComponent;

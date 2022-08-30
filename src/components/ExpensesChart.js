import Chart from "./Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.chartData.forEach((data) => {
    const onePoint = chartDataPoints[data.date.getMonth()];
    onePoint.value += data.amount;
  });

  const maxValue = Math.max(...chartDataPoints.map((data) => data.value));
  return <Chart dataPoints={chartDataPoints} maxValue={maxValue} />;
};

export default ExpensesChart;

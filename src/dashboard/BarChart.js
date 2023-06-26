import { useRef, useState, useEffect } from "react";
import { Chart } from "chart.js";

const labels = ["Location", "Equipment", "Restaurant", "Hotel","Car"];
const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgba(99, 102, 241, 1)",
      hoverBackgroundColor: "rgba(67, 56, 202, 1)",
      borderColor: "rgb(99, 102, 241)",
      data: [10, 10, 15, 20,15],
      fill: true,
    },
  ],
};

const chartConfig = {
  type: "bar",
  data: data,
  options: {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawTicks: false,
        },
        ticks: {
            padding: 8
        }
      },
    },
  },
};

function BarChart() {
  const chartContainer = useRef(null);
  const [, setChart] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const chartInstance = new Chart(chartContainer.current, chartConfig);
      //chartInstance.canvas.parentNode.style.height = "340px";
      setChart(chartInstance);
    }
    return () => {
      chartContainer.current = null;
      setChart(null);
    };
  }, [chartContainer]);

  return (
    <div className="bg-white rounded-md shadow p-5">
      <div className="text-xl text-gray-600 mb-3 font-semibold">Total inspections by type</div>
      <div className="">
        <canvas ref={chartContainer} />
      </div>
    </div>
  );
}

export default BarChart;

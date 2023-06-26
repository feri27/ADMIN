import { useRef, useState, useEffect } from "react";
import { Chart } from "chart.js";

const data = {
    labels: [
      '7 Days',
      '14 Days',
      '21 Days',
      'Over 21 Days'
    ],
    datasets: [{
      data: [30, 50, 100, 200],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgba(99, 102, 241, 1)'
      ],
      hoverOffset: 4,
      
    }]
  };

const chartConfig = {
  type: "pie",
  data: data,
  options:{
    radius:"100%",
    cutout:"0%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
           
            display: true,
            position:'top',
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        },
        
        
    }
  }
  
};

function PieChart() {
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
      <div className="text-xl text-gray-600  font-semibold">Percentage of Inspections completed</div>
      <div className="">
        <canvas ref={chartContainer} />
      </div>
    </div>
  );
}

export default PieChart;

import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Lesya", "Dorrie", "Pierrette"],
  datasets: [
    { data: [75, 88, 71], backgroundColor: ["#FD6664", "#FFB266", "#FFFF66"] },
    { data: [99, 105, 0], backgroundColor: ["#FD6664", "#FFB266", "#FFFF66"] },
    { data: [0, 157, 0], backgroundColor: ["#FD6664", "#FFB266", "#FFFF66"] },
  ],
};

function App() {
  return (
    <div className="App">
      <Pie type="pie" data={data} />
    </div>
  );
}

export default App;

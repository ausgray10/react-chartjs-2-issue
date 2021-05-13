import { Pie } from "react-chartjs-2";

const data = {
  labels: ["p1", "p2", "p3"],
  datasets: [
    { data: [75, 88, 71], backgroundColor: ["white", "yellow", "blue"] },
    { data: [99, 105, 0], backgroundColor: ["white", "yellow", "blue"] },
    { data: [0, 157, 0], backgroundColor: ["white", "yellow", "blue"] },
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

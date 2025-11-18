import Header from "./components/Header";
import Tasks from "./components/Tasks";
import USComponent from "./components/Temp/USComponent";
import USWithArray from "./components/Temp/USWithArray";
import USWithObject1 from "./components/Temp/USWithObject1";
function App() {
  return (
    <div className="container">
      {/* <Header title="Task Tracker" />
      <Tasks /> */}

      {/* <USComponent /> */}
      {/* <USWithObject1 /> */}
      <USWithArray />
    </div>
  );
}

export default App;

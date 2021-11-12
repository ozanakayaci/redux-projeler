import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Graph from "./components/Graph";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Dropdown />
      <Graph />
      <Footer />
    </div>
  );
}

export default App;

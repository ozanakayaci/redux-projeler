import "./App.css";

import Header from "./components/Header";
import Input from "./components/Input";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Input />
        <Preview />
      </div>
    </div>
  );
}

export default App;

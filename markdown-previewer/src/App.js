import "./App.css";

import Help from "./components/Help";
import Input from "./components/Input";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <div className="help">
        <Help />
      </div>

      <div className="main">
        <Input />
        <Preview />
      </div>
    </div>
  );
}

export default App;

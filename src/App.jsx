import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import SingleRepo from "./views/singleRepo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="{`/SingleRepo/${repo.id}`}" element={<SingleRepo />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import RepoDetails from "./views/repoDetails";
import ErrorBoundary from "./views/errorBoundary";
import ErrorPage from "./views/errorPage";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/repodetails/:id" element={<RepoDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;

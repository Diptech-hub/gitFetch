import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/diptech-hub/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <button key={repo.id}>{repo.name}</button>
        ))}
      </ul>
    </div>
  );
}

export default App;

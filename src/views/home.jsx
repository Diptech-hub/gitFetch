import { useState, useEffect } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import SingleRepo from "./singleRepo";

function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/diptech-hub/repos"
        );
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
      <nav>
        {repos.map((repo) => (
          <button key={repo.id} onClick={SingleRepo}>
            <NavLink to={`./singleRepo.jsx/${repo.name}`}>{repo.name}</NavLink>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Home;

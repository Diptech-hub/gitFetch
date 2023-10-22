import { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { GitHub } from "react-feather";

function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/diptech-hub/repos`
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
      <GitHub color="#329071" size={60} />
      <h1>My GitHub Repositories</h1>
      {repos.map((repo) => (
        <Link className="link" to={`/repoDetails/${repo.name}`} key={repo.id}>
          <button>{repo.name}</button>
        </Link>
      ))}
    </div>
  );
}

export default Home;

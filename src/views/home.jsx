import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./home.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import SingleRepo from "./singleRepo";

function Home() {
  const [repos, setRepos] = useState([]);
  // const [selectedRepo, setSelectedRepo] = useState(null);

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

  // const handleRepoClick = (repo) => {
  //   setSelectedRepo(repo);
  // };

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      {repos.map((repo) => (
        <button key={repo.id}>
          <Link className="link" to="/click" component={SingleRepo}>
          {repo.name}
          </Link>
        </button>
      ))}
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";
import "./home.css";

function SingleRepo() {
  // const [repos, setRepos] = useState([]);
  // const [selectedRepo, setSelectedRepo] = useState(null);
  const [selectedRepo, setRepos] =useState({});

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

  return(
    <div>
      {selectedRepo && (
        <div>
          <h2>{selectedRepo.name}</h2>
          <p>{selectedRepo.description}</p>
          <p>Stars: {selectedRepo.stargazers_count}</p>
          <p>Language: {selectedRepo.language}</p>
          {/* Add more information about the repository here */}
        </div>
      )}
    </div>
  )
}

export default SingleRepo;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleRepo() {
  const { name } = useParams();
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "`https://api.github.com/repositories/${name}`"
        );
        setRepos(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRepos();
  }, [name]);

  return (
    <div>
      {repos ? (
        <div>
          <h1>{repos.name}</h1>
          <p>Description: {repos.description}</p>
          <p>Language: {repos.language}</p>
          <p>Stars: {repos.stargazers_count}</p>
          {/* Display other relevant information about the repository */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/repositories">Back to Repositories</Link>
    </div>
  );
}

export default SingleRepo;


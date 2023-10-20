import { useState, useEffect, useParams } from "react";

function SingleRepo(){
  const { id } = useParams();
  const [repoInfo, setRepoInfo] = useState(null);

    // Fetch repository information for the selected repo using the repo ID
    // Update the repoInfo state with the fetched data
    useEffect(() => {
      async function fetchRepos() {
        try {
          const response = await fetch(
            "https://api.github.com/users/diptech-hub/repos"
          );
          const data = await response.json();
          setRepoInfo(data);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchRepos();
  }, [id]);

  return (
    <div>
      {repoInfo ? (
        <>
          <h2>{repoInfo.name}</h2>
          <p>{repoInfo.description}</p>
          <p>Stars: {repoInfo.stargazers_count}</p>
          <p>Language: {repoInfo.language}</p>
          {/* Add more information about the repository here */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleRepo;
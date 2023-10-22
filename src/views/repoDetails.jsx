import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RepoDetails() {
  const { repoID } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

 

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(`https://api.github.com/repos/diptech-hub/${repoID}`);
        const data = await response.json();
        setRepoDetails(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRepos();
  }, [repoID]);

  // useEffect(() => {
  //   const fetchRepoDetails = async () => {
  //     const response = await fetch(`https://api.github.com/repos/diptech-hub/${repoID}`);
  //     const data = await response.json();
  //     setRepoDetails(data);
  //   };


  //   fetchRepoDetails();
  // }, [repoID]);

  if (!repoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{repoDetails.name}</h1>
      <p>{repoDetails.description}</p>
      <p>Language: {repoDetails.language}</p>
      <p>Stars: {repoDetails.stargazers_count}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default RepoDetails;
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./repoDetails.css";

function RepoDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [deployment, setDeployment] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/diptech-hub/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/diptech-hub/${id}/deployments`)
      .then((response) => response.json())
      .then((data) => {
        setDeployment(data);
      });
  }, [id]);

  return (
    <div>
      <h2 className="repodetails">Repo Name: {details.name}</h2>
      <h2 className="repodetails">Repo Description:{details.description}</h2>
      <h2 className="repodetails">Repo ID:{details.id}</h2>
      <h2 className="repodetails">
        Repo Stargazers_Count: {details.stargazers_count}
      </h2>
      <h2 className="repodetails">Repo Forks: {details.forks}</h2>
      <p>
        <a href={`https://github.com/${details.full_name}`}>View on Github</a>
      </p>
    </div>
  );
}

export default RepoDetails;

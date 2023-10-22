import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Cpu, ArrowLeft, AlertTriangle } from "react-feather";
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
    <div className="repodetails">
      <Cpu color="#329071" size={45} />
      <h2 className="head">{details.name}</h2>
      <h2 className="bodyy">Repo Description:{details.description}</h2>
      <h2 className="bodyy">Repo ID:{details.id}</h2>
      <h2 className="bodyy">
        Repo Stargazers_Count: {details.stargazers_count}
      </h2>
      <h2 className="bodyy">Repo Forks: {details.forks}</h2>
      <h2 className="bodyy">Repo Language: {details.language}</h2>
      <h2 className="bodyy">Repo Date: {details.created_at}</h2>
      <h2 className="bodyy">Repo Size: {details.size}</h2>
      <p>
        <a href={`https://github.com/${details.full_name}`} >View on Github</a>
      </p>
      <Link to="/">
        <button>
          <ArrowLeft size={20} />
        </button>{" "}
      </Link>
      <Link to="*">
        <button className="danger">
          <AlertTriangle size={20} />
        </button>{" "}
      </Link>
    </div>
  );
}

export default RepoDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../Assets/Externals";
import Loader from "../../Components/Loader/Loader";
import RepositoryCards from "../../Components/RepositoryCards/RepositoryCards";

const Repository = () => {
  const { username } = useParams();
  const [repositoryData, setRepositoryData] = useState([]);

  useEffect(() => {
    const request = async () => {
      const fetching = await fetch(`${url}/${username}/repos`);
      const response = await fetching.json();
      setRepositoryData(response);
    };
    request();
  }, [username]);

  console.log(repositoryData);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}>
      {repositoryData.length > 0 ? (
        repositoryData?.map((info) => (
          <RepositoryCards
            key={info.id}
            name={info.name}
            repo_name={info.full_name}
            language={info.language}
            privvate={info.private}
            getAt={info.html_url}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Repository;

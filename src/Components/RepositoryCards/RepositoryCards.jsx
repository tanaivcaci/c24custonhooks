import React from "react";

import {
  ReposContainer,
  PrivWrapper,
  Blinker,
  Anchor,
} from "./Repository.style";

const RepositoryCards = ({ name, repo_name, language, privvate, getAt }) => {
  console.log(privvate);
  return (
    <ReposContainer>
      <p>Project Name: {name}</p>
      <p>Language Used: {language ? language : "Unregistered"}</p>
      <p>Full name: {repo_name}</p>
      <PrivWrapper>
        <p>Private:</p>
        <div style={{ display: "flex", gap: "35px" }}>
          <Blinker privvy={privvate}></Blinker>
          <Blinker privvy={!privvate}></Blinker>
        </div>
      </PrivWrapper>
      <Anchor href={getAt} target='_blank' rel='noreferrer'>
        Pull a copy of the Repo, here.
      </Anchor>
    </ReposContainer>
  );
};

export default RepositoryCards;

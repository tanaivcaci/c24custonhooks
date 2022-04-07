import React from "react";
import { SingleUserContainer, SingleAvatar, UserName } from "./Single.styles";

const SingleUserCard = () => {
  return (
    <SingleUserContainer>
      <section>
        <SingleAvatar src='#' alt='user_img' />
      </section>
      <section>
        <UserName>name:</UserName>
        <p>Bio:</p>
        <p>Followers: </p>
        <p>Following: </p>
        <p>Repos: </p>
      </section>
    </SingleUserContainer>
  );
};

export default SingleUserCard;

import React from "react";
import { SingleUserContainer, SingleAvatar, UserName } from "./Single.styles";

const SingleUserCard = ({ avatar, bio, name, followers, following, repos }) => {
  return (
    <SingleUserContainer>
      <section>
        <SingleAvatar src={avatar} alt='user_img' />
      </section>
      <section>
        <UserName>{name ? name : "Not registered"}</UserName>
        <p>{bio ? bio : "Software Developer"}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repos: {repos}</p>
      </section>
    </SingleUserContainer>
  );
};

export default SingleUserCard;

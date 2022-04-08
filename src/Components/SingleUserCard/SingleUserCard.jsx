import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SingleUserContainer,
  SingleAvatar,
  UserName,
  Paragraph,
  Wrapper,
} from "./Single.styles";

const SingleUserCard = ({
  avatar,
  bio,
  name,
  login,
  followers,
  following,
  repos,
}) => {
  const navigate = useNavigate();
  return (
    <SingleUserContainer>
      <section>
        <SingleAvatar src={avatar} alt='user_img' />
      </section>
      <section>
        <UserName>{name ? name : "Not registered"}</UserName>
        <p>{bio ? bio : "Software Developer"}</p>
        <Wrapper>
          <Paragraph onClick={() => navigate(`/users/${login}/followers`)}>
            {" "}
            Followers:
          </Paragraph>
          <span>{followers}</span>
        </Wrapper>
        <Wrapper>
          <Paragraph onClick={() => navigate(`/users/${login}/following`)}>
            {" "}
            Following:
          </Paragraph>
          <span>{following}</span>
        </Wrapper>
        <Wrapper>
          <Paragraph onClick={() => navigate(`/users/${login}/repos`)}>
            {" "}
            Repos:
          </Paragraph>
          <span>{repos}</span>
        </Wrapper>
      </section>
    </SingleUserContainer>
  );
};

export default SingleUserCard;

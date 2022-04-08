import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  AvatarContainer,
  Avatar,
  TextContainer,
  Name,
  More,
} from "./Cards.styles";

const Cards = ({ id, name, avatar }) => {
  const navigate = useNavigate();
  return (
    <CardContainer>
      <AvatarContainer>
        <Avatar src={avatar} alt='user_avatar' />
      </AvatarContainer>
      <TextContainer>
        <Name name={name.length}>{name}</Name>
        <More onClick={() => navigate(`/users/${name}`)}>See More</More>
      </TextContainer>
    </CardContainer>
  );
};

export default Cards;

import React from "react";
import {
  CardContainer,
  AvatarContainer,
  Avatar,
  TextContainer,
  Name,
  More,
} from "./Cards.styles";

const Cards = () => {
  return (
    <CardContainer>
      <AvatarContainer>
        <Avatar src='#' alt='user_avatar' />
      </AvatarContainer>
      <TextContainer>
        <Name>name:</Name>
        <More>See More</More>
      </TextContainer>
    </CardContainer>
  );
};

export default Cards;

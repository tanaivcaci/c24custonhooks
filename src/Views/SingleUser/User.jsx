import React from "react";

import { UserContainer, TitleUser, Wrapper, anchorUser } from "./User.style";

const User = () => {
  return (
    <UserContainer>
      <Wrapper>
        <TitleUser>User Name</TitleUser>
        <a href='#' rel='nonreferrer' style={anchorUser}>
          Back Home
        </a>
      </Wrapper>
      <div>
        <p>Single User Card</p>
      </div>
    </UserContainer>
  );
};

export default User;

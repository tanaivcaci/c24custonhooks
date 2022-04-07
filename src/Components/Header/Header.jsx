import React from "react";
import { searchIcon } from "../../Assets/Externals";

import { HeaderContainer, Title, InputArea, SearchB } from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Welcome to HubBook</Title>
      <form>
        <InputArea placeholder='Input Username' />
        <SearchB type='submit'>
          {" "}
          <i className={searchIcon}></i>{" "}
        </SearchB>
      </form>
    </HeaderContainer>
  );
};

export default Header;

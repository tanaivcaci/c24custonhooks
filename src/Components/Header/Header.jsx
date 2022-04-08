import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchIcon } from "../../Assets/Externals";

import { HeaderContainer, Title, InputArea, SearchB } from "./Header.style";

const Header = () => {
  const [value, setValue] = useState(""); //capturo valor del input
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    const inputName = value.toLocaleLowerCase().trim();
    if (value.length > 0 && !value.includes(" ")) {
      navigate(`/users/${inputName}`);
    }
  };
  return (
    <HeaderContainer>
      <Title>Welcome to HubBook</Title>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <InputArea
          placeholder='Input Username'
          onChange={(e) => setValue(e.target.value)}
        />
        <SearchB type='submit'>
          {" "}
          <i className={searchIcon}></i>{" "}
        </SearchB>
      </form>
    </HeaderContainer>
  );
};

export default Header;

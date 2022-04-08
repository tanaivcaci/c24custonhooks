import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <h1>Loading Data...</h1>
    </LoaderContainer>
  );
};

export default Loader;

import React from "react";
import { ErrorContainer, Title, generalStyles, anchor } from "./Error.style";

const Error = () => {
  return (
    <ErrorContainer>
      <Title>Sorry!!!</Title>
      <h2 style={generalStyles}>not a valid route</h2>
      <p>Follow these instructions to have a successful experience:</p>
      <ol style={generalStyles}>
        <li style={{ textAlign: "left" }}>
          Input the username rather than the actual name.
        </li>
        <li style={{ textAlign: "left" }}>Do not use space.</li>
      </ol>
      <a href='#' style={anchor}>
        Back to Home Page
      </a>
    </ErrorContainer>
  );
};

export default Error;

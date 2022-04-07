import React from "react";
import { FooterContainer, Paragraph } from "./Footer.style";
const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph>This is a project by Camada 1</Paragraph>
      <Paragraph>Using GitHub's Public API</Paragraph>
      <Paragraph>Topic: React Router</Paragraph>
      <Paragraph>date: April 8th 2020</Paragraph>
    </FooterContainer>
  );
};

export default Footer;

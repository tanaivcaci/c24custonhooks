import styled from "styled-components";
import { MainFont, Roboto } from "../../Assets/Externals";

export const ErrorContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    border: 1px solid pink;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-family: ${Roboto}, sans-serif;
`;

export const Title = styled.h1`
    margin-top: 50px;
    margin-bottom: 20px;
    font-family: ${MainFont}, cursive;
    font-size: 4rem;
    color: crimson;
`;

export const generalStyles = {
    "margin": "10px",
}

export const anchor = {
    "textDecoration":"none",
    "backgroundColor":"crimson",
    "color": "white",
    "padding":"20px",
    "marginTop":"10px"
}
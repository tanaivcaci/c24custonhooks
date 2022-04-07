import styled from "styled-components";
import {MainFont} from "../../Assets/Externals";


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
`;

export const Title = styled.h1`
    font-family: ${MainFont}, cursive;
    color: purple;
    text-shadow: 2px 2px 1px black;
    font-size: 4rem;
`;

export const InputArea = styled.input`
    padding: 10px;
    width: 400px;
    border-radius: 10px 0 0 10px;
    border: none;
    -webkit-box-shadow: -1px 6px 21px -4px rgba(0,0,0,0.29); 
    box-shadow: -1px 6px 21px -4px rgba(0,0,0,0.29);
    margin: 10px 0;
    &:focus{
        outline: none;
    }
    @media (max-width: 472px){
        width: 200px;
    }
`;

export const SearchB = styled.button`
    padding: 10px;
    border: none;
    border-radius: 0 10px 10px 0;
    &:hover{
        background-color: purple;
        color: white;
    }
`;

import styled from "styled-components";
import { MainFont } from "../../Assets/Externals"

export const CardContainer = styled.div`
    width: 250px;
    height: 130px;
    margin: 20px;
    -webkit-box-shadow: 2px 2px 21px 2px rgba(0,0,0,0.3); 
    box-shadow: 2px 2px 21px 2px rgba(0,0,0,0.3);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
`;

export const AvatarContainer = styled.section`
    width: 130px;
    height: 100%;
    border-radius: 20px 0 0 20px;
`;

export const Avatar = styled.img`
    width: 100%;
    min-height: 100%;
    border-radius: 20px 0 0 20px;
`;

export const TextContainer = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const Name = styled.h4`
    font-family: ${MainFont}, cursive;
    margin-bottom: 10px;
    font-size: ${(props)=> props.name >= 11 ? ".8rem" : "1.2rem"};
    text-transform: capitalize;
`;

export const More = styled.button`
    border: none;
    font-weight: bolder;
    background-color: white;
    cursor: pointer;
    &:hover{
        margin-top: -2px;
        color: crimson;
        text-shadow: 1px 1px 1px gray;
    }

`; 
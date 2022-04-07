import styled from "styled-components";
import { Roboto } from "../../Assets/Externals";

export const SingleUserContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    -webkit-box-shadow: -1px 6px 10px 4px rgba(0,0,0,0.42); 
    box-shadow: -1px 6px 10px 4px rgba(0,0,0,0.42);
    padding: 20px;
    font-family: ${Roboto};
`

export const SingleAvatar = styled.img`
    width: 320px;
`;

export const UserName = styled.p`
    font-size: 20px;
    color: crimson;
`
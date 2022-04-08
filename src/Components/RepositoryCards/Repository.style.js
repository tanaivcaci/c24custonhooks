import styled from "styled-components";

export const ReposContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 20px;
    padding: 20px 30px;
    -webkit-box-shadow: 2px 2px 21px 2px rgba(0,0,0,0.3); 
    box-shadow: 2px 2px 21px 2px rgba(0,0,0,0.3);
    border-radius: 20px;
`;


export const PrivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 8px;
`;

export const Blinker = styled.div`
    background-color: ${(props)=> props.privvy ? "#013220" : "red"};
    width: 10px;
    height: 10px;
    border-radius: 50%;
`;

export const Anchor = styled.a`
    text-decoration:none;
    color: black;
    padding:20px;
    margin-top:10px;
    transition: .4s ease-in-out;
    &:hover{
        transform: scale(1.1);
        color: crimson;
    }
`
    
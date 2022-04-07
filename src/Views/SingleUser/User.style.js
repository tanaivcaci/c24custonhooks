import styled from "styled-components";
import { Title } from "../../Components/Header/Header.style";
import { anchor } from "../Error_v/Error.style"

export const UserContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 643px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const TitleUser = Title;
export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const anchorUser = anchor;

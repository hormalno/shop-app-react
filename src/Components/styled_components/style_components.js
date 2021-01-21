import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledLinkIcons = styled(NavLink)`
    max-height: 50px;
    width: auto;
    background: transparent;
    font-size: 18px;
    transition: 0.2s ease-in-out;
    &:hover {
        background-color: rgba(255,255,255,0.2);
        font-size: 14px;
        .link {
            width: 100%;
            padding: 0 5px 0 5px;
            visibility: visible;
            font-size: 14px;
        }
    };
    .link {
        width: 0;
        font-family: 'Roboto', sans-serif;
        transition: 0.2s ease-in-out;
        visibility: hidden;
        font-size: 0px;
    }  
`

export const StyledSpan = styled.span `
    color: white;
`
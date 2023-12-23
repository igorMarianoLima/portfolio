import styled from "styled-components";

export const Link = styled.a`
    width: fit-content;

    display: flex;
    align-items: center;
    gap: 8px;

    padding: 4px 12px;

    color: var(--white-200);
    
    border: 2px solid var(--black-075);
    border-radius: 8px;
    
    svg path {
        fill: var(--black-050);
    }

    &, * {
        transition: all 0.4s;
    }

    &:hover {
        color: var(--white-100);
        border-color: var(--purple-100);
        background-color: var(--purple-500);

        svg path {
            fill: var(--purple-100);
        }
    }
`;
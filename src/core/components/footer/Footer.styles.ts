import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: var(--black-200);
    border-top: 2px solid var(--black-075);

    padding: 64px 0;
`;

export const FooterContainer = styled.div.attrs({
    className: 'container'
})`
    display: flex;
    justify-content: space-between;
`

export const SocialLinks = styled.menu`
    display: flex;
    align-items: center;
    gap: 48px;
`;

export const SocialLink = styled.a`
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
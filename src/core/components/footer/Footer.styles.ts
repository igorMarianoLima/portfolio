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
    gap: 24px 48px;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`

export const SocialLinks = styled.menu`
    display: flex;
    align-items: center;
    gap: 48px;
`;

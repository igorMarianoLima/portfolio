import styled from 'styled-components';

export const Header = styled.header`
    padding: 32px 0;
`;

export const Container = styled.div.attrs({
    'className': 'container'
})`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px 48px;

    @media screen and (max-width: 1024px){
        flex-direction: column;

        h1 {
            display: none;
        }
    }
`;

export const Menu = styled.menu`
    display: flex;
    align-items: center;
    gap: 48px;
`;

export const MenuLink = styled.a<{
    $isActive: boolean
}>`
    color: ${props => props.$isActive ? 'var(--white-100)' : 'var(--white-200)'};
`;
import styled from "styled-components";

export const Section = styled.section`
    padding: 96px 0;
`

interface GridProps {
    $cols: number;
    $alignItems?: 'initial' | 'center';
    $justifyContent?: 'initial' | 'center';
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.$cols}, 1fr);
    align-items: ${props => props.$alignItems ?? 'flex-start'};
    justify-content: ${props => props.$justifyContent ?? 'flex-start'};
    gap: 48px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

interface ContainerProps {
    $direction?: 'row' | 'column';
    $gap?: number[];
}

interface ColProps extends ContainerProps {
    $size: number;
}

export const Col = styled.div<ColProps>`
    grid-column: span ${props => props.$size};

    display: flex;
    flex-direction: ${props => props.$direction ?? 'column'};
    gap: ${props => props.$gap?.join('px ') ?? 0};
`;

interface FlexProps extends ContainerProps {
    width?: string;
}

export const Flex = styled.div<FlexProps>`
    width: ${props => props.width ?? '100%'};

    display: flex;
    flex-direction: ${props => props.$direction ?? 'column'};
    gap: ${props => props.$gap?.map(gap => gap + 'px ') ?? 0};
    flex-wrap: wrap;
`;

export const GradientText = styled.span`
    background: linear-gradient(90deg, var(--blue-100) 0%, var(--green-100) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const HeroSection = styled(Section)`
    display: flex;
    align-items: center;

    min-height: calc(100dvh - 115px);
    border-bottom: 2px solid var(--blue-100);

    @media screen and (max-width: 1024px) {
        div {
            width: 100%;
        }

        img {
            display: none;
        }   
    }
`;

export const HeroTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const HeroDescription = styled.p`
    color: var(--white-200);

    span {
        color: var(--white-100);
        font-weight: 600;
    }
`;

export const GrayParagraph = styled.p`
    color: var(--white-200);
`;

export const ContactDivider = styled(Col)`
    padding: 48px 0;

    &:first-of-type {
        border-right: 2px solid var(--black-075);

        @media screen and (max-width: 1024px) {
            border-right: 0;
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 0;
    }
`;
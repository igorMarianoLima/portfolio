import styled, { css } from "styled-components";

interface ContentProps {
    $side: 'left' | 'right';
}

export const Container = styled.article<ContentProps>`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: ${props => props.$side === 'left' ? 'flex-start' : 'flex-end'};
`;

export const ImageContainer = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 512/269;
    max-width: 512px;
    width: 100%;

    padding: 32px 96px;

    background-color: var(--black-100);
    border-radius: 24px;

    img {
        max-height: 100%;
    }

    @media screen and (max-width: 1280px) {
        max-width: unset;
        aspect-ratio: unset;

        flex-direction: column;
        gap: 32px;

        padding: 48px 5%;
    }
`;

export const ContentWrapper = styled.div<ContentProps>`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 32px;

    position: absolute;
    top: 50%;
    left: ${props => props.$side === 'left' ? 'calc(100% - 64px)' : '64px'};

    transform: translate(${props => props.$side === 'left' ? 0 : '-100%'}, -50%);

    ${props => props.$side === 'right' && alignToRight}

    @media screen and (max-width: 1280px) {
        position: static;
        transform: none;
    }
`;

const alignToRight = css`
    * {
        text-align: right;
        align-self: flex-end;
    }
`;

export const ProjectName = styled.h1``;

export const ProjectTechnologies = styled.h2`
    color: var(--white-200);
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
`;
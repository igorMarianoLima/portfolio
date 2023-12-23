import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    gap: 12px;

    background-color: var(--purple-500);
    border: 2px solid var(--purple-100);
    border-radius: 12px;

    padding: 24px;
`;

export const Texts = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ProficiencyProgress = styled.progress`
    height: 16px;
    width: 100%;

    &::-webkit-progress-bar {
        background-color: var(--black-075);
        border-radius: 8px;
    }
    &::-webkit-progress-value {
        background: linear-gradient(90deg, var(--purple-100) 0%, #5CE6FF 100%);
        border-radius: inherit;
    }
`;
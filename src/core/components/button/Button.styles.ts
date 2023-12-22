import styled from "styled-components";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

export const BtnPrimary = styled(Button)`
    gap: 12px;
    
    padding: 12px 48px;

    width: fit-content;
    min-width: 220px;

    border-radius: 80px;
    background: linear-gradient(90deg, var(--green-100) 0%, rgba(51, 160, 255, 0.12) 100%);
`
import styled from "styled-components";

import { IconSize } from "./Icon.interface";

interface ContainerProps {
    size: IconSize;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1/1;
    width: ${props => props.size};
`;
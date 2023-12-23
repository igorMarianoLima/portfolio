import { IconProps } from "./Icon.interface"
import { icons } from "./icons"

import * as S from './Icon.styles';

export const Icon = ({
    name,
    size,
    ...props
}: IconProps) => {
    const IconElement = icons[name];

    return(
        <S.Container size={size}>
            <IconElement {...props}></IconElement>
        </S.Container>
    )
}
import { PropsWithChildren } from 'react';
import { ButtonProps } from './Button.interface';

import * as S from './Button.styles';

export const Button = ({
    children,
    variant = 'primary',
    ...props
}: PropsWithChildren<ButtonProps>) => {
    if (variant === 'primary') return <ButtonPrimary {...props}>{children}</ButtonPrimary>;
}

export const ButtonPrimary = ({
    children
}: PropsWithChildren) => {
    return(
        <S.BtnPrimary>
            <span className='h6'>{children}</span>
        </S.BtnPrimary>
    )
}
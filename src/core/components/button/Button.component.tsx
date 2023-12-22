import { PropsWithChildren } from 'react';
import { ButtonProps } from './Button.interface';

import * as S from './Button.styles';

export const Button = ({
    children,
    variant = 'primary',
    ...props
}: PropsWithChildren<ButtonProps>) => {
    if (variant === 'primary') return <ButtonPrimary {...props}>{ children }</ButtonPrimary>;
    if (variant === 'ghost') return <ButtonGhost {...props}>{ children }</ButtonGhost>
}

export const ButtonPrimary = ({
    children,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    return(
        <S.BtnPrimary {...props}>
            <span className='h6'>{ children }</span>
        </S.BtnPrimary>
    )
}

export const ButtonGhost = ({
    children,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    return(
        <S.BtnGhost {...props}>
            <span className='h6'>{ children }</span>
        </S.BtnGhost>
    )
}
import { HTMLAttributes } from "react";

export type ButtonType = 'primary' | 'ghost';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: ButtonType;
}
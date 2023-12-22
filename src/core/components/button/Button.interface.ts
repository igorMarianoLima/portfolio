import { HTMLAttributes } from "react";

export type ButtonType = 'primary';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: ButtonType;
}
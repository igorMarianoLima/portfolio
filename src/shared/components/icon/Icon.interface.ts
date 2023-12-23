import { SVGProps } from "react";
import { IconName } from "./icons";

export type IconSize = 24 | 32;

export interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
    size: IconSize;
}
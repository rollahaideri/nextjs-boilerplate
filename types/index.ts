import { MouseEventHandler } from "react";


export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomIcons {
    title: string;
    description: string;
    icon: string;
    alt: string;
}

import { Button, ButtonBaseProps, SxProps, Theme, Typography } from '@mui/material'
import React, { FC } from 'react'

export enum ButtonType {
    button= 'button',
    submit='submit',
    reset= 'reset'   
}

export enum ColorType {
    Primary= 'primary',
    secondary= 'secondary', 
}

interface ReusableBtnProps extends ButtonBaseProps {
    text : string;
    backgroundColor : string;
    widthPercentage : number;   
    onClick: () => void;
    type?: ButtonType
    color?: ColorType
}

const reusableBtn : FC<ReusableBtnProps> = ({text, backgroundColor, widthPercentage, onClick, type, color, ...props} ) => {
    const buttonStyles: SxProps<Theme> = {
        backgroundColor: backgroundColor,
        width: `${widthPercentage}%`,
      };
      
  return (
    <>
        <Button
            {...props}
            onClick={onClick}
            sx={buttonStyles}
            type={type}
            color={color}>
            <Typography>{text}</Typography>
            </Button>
    </>
  )
}

export default reusableBtn
export {};
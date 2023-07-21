import React from 'react'
import { TextField, TextFieldProps } from '@mui/material';

interface InputProps extends Omit<TextFieldProps, 'label'> {
  label: string;
}

const Input: React.FC<InputProps> = ({label, ...props}) => {
  return <TextField
    label={label} 
    variant="outlined" 
    {...props} />;
}

export default Input


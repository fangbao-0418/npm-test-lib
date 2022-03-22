import 'core-js';
import React from 'react';
export interface ButtonProps {
    prefixCls: string;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;

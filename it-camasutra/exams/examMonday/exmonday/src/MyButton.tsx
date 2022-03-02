import React , {ButtonHTMLAttributes , DetailedHTMLProps} from 'react';



export const MyButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children, ...rest }) => {
    return (
        <button {...rest}>{children}</button>
    );
};


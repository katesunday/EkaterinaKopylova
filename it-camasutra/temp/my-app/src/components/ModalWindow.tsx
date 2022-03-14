import React from 'react';

type PropsType = {
    title:string
}
export const ModalWindow:React.FC<PropsType> = ({title,children}) => {
    // const {title,children} = props
    return (
        <div>
            <h1>{title}</h1>
            <input type='text'/>
            <input type='text'/>
            {children}
            <div>
            <button>yes</button>
            <button>no</button>
            </div>
        </div>
    );
};


import type { ReactNode } from "react";

type buttonProps = {
    children: ReactNode,
    handleChange?: () => void;
}

 function Button({children, handleChange}: buttonProps){
    return (<button onClick={handleChange} >{children}</button>)
}


export default Button;
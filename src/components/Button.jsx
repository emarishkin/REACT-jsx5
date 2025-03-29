import { Children } from "react"


const Button = ({children,onTab}) =>{
    return (
        <button onClick={onTab}>{children}</button>
    )
}
export default Button
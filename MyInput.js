
import { useContext } from "react"

import { Context } from "./Context/InputContext";

export default function MyInput () {

    let myContext = useContext(Context);

    return (
        <>
            <label>{myContext.title}</label>
            <input value={myContext.inputValue} onChange={(e) => myContext.handleChange(e.target.value)}  type="text"  maxlength="10"/>
        </>
    )
}

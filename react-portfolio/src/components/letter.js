import React, {useContext} from "react"
import TypeContext from "../utils/TypeContext"
function e(){
    const { letter } = useContext(TypeContext)

    return (
    <span>
        {letter}
    </span>
    )
}

export default e
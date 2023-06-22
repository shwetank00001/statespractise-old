
import React from "react"
import './index.css'

export default function State() {

    const [IsImportant,  setIsImportant] = React.useState("yes")

    console.log(IsImportant)

    function handleClick(){
        setIsImportant("No")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{IsImportant}</h1>
            </div>
        </div>
    )
}

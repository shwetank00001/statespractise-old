import React from "react"

export default function Ternary() {

    const [value, setValue] = React.useState(true)

    let isGoingOut = value ? "YES" : "NO"

    function flipValue(){
        setValue(function(item){
            return(
                !item
            )
        })
    }

    // function flipValue(){
    //     //     setValue((item) => !item)
    //     // }
        

    return(
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={flipValue} className="state--value">
                <h1>{isGoingOut}</h1>
            </div>
        </div>
    )
                                 
}
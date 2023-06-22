import React from "react"
import Count from "./Count"

export default function App() {

    const [count, setCount] = React.useState(0)

    function add(){

        setCount(count+1)
    }

    function sub(){
        setCount(count - 1)
    }



    return (
        <div className="counter">
            <button onClick={sub} className="counter--minus">-</button>
            <div className="counter--count">
                <Count number = {count} />
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div>
    )
}

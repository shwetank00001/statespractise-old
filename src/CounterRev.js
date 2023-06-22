import React from 'react'
import Count from './Count'

const CounterRev = () => {


    const [counter, setCounter] = React.useState(0)

    function add(){
        setCounter(counter +1)

    }

    function sub(){
       setCounter(counter -1)
    }


  return (

    <div>
      <Count number = {counter}/>
    </div>
  )
}

export default CounterRev
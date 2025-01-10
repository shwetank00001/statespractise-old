import React from 'react'

const CountLatest = () => {
  const [count, setCount] = React.useState(0)

  function add(){
    setCount(function(item){
      return item+1
    })
  }

  const subtract =()=> setCount(item => item-1)

  return (
    <div>
      <button onClick={subtract}>-</button>
      <h3>Counter: {count}</h3>
      <button onClick={add}>+</button>
    </div>
  )
}

export default CountLatest
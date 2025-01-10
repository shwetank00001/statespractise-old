import React from 'react'

const ThingsMap = () => {
    const [things, setThings] = React.useState(['Things 1', 'Things 2'])

    const ele = things.map(function(item){
        return <p key={item}>{item}</p>
    })
    function addThings(){
        setThings(function(item){
            return [...item, `Things ${things.length + 1}`]
        })
    }
  return (
    <div>
        {ele}
        <button onClick={addThings}>Add</button>
    </div>
  )
}

export default ThingsMap
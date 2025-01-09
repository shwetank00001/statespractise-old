import React from 'react'

const ThingsMap = () => {
    const thingsArray = ["Things 1", "Things 2"]

    const ele = thingsArray.map(function(item){
        return (
            <p>{item}</p>
        )
    })

    function addThing(){
        const newData = `Things ${thingsArray.length + 1}`
        thingsArray.push(newData)
        console.log(thingsArray)
    }

  return (
    <div>{ele}
        <button onClick={addThing}>Click to add a thing</button>
    </div>
  )
}

export default ThingsMap
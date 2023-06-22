import React from 'react'

const Maptest = () => {

    const [data, setData] = React.useState(["Thing 1 ", "Thing 2 ","Thing 3 "])

    const ele = data.map(function(item){
        return(item)
    })

    function add(){
        setData(function(item){
            return(
                [...item,`Thing ${item.length + 1} `]
            )
        })
    }
  return (
    <div>
        <button onClick={add}>Add another thing</button>
        {ele}
    </div>
  )
}

export default Maptest
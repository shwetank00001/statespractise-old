import React from 'react'

const Things = () => {

    const [data, setData]  = React.useState(['item 1' ,'item 2'])

    const ele = data.map(function(item){
        return(item)
    })

    function addItem(){
        setData(function(item){
            return(
                [...item, `item ${data.length+1},`]
            )
        })
    }
  return (
    <div>
        {ele}
        <button onClick={addItem}>ADD ITEM</button>
    </div>
  )
}

export default Things
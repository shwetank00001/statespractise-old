import React from 'react'

const Things = () => {

    const [data, setData ] = React.useState(['Thing 1', ' Thing 2'])

    function add(){
        setData(function(item){
            return([
                ...item,
                ` Thing ${data.length + 1}`
            ])
        })
    }


  return (
    <div>
        <h2>Add a thing</h2>
        <button onClick={add}>Here</button>

        <h4>{data}</h4>
    </div>
  )
}

export default Things
import React from 'react'

const GoingOut = () => {

    const [isOut, setIsOut] = React.useState(true)

    function mood(){
        setIsOut(function(item){
            return !item
        })
    }

    const ele = isOut ? "Yes" : "No"
  return (
    <div>
        <p>Do i feel like going to office today?</p>
        <p onClick={mood}>{ele}</p>
    </div>
  )
}

export default GoingOut
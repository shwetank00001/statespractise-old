import React from 'react'

const Important = () => {
    const [isImportant, setIsImportant] = React.useState(true)
    
    function handleImp(){
        setIsImportant(item => !item)
    }
    console.log(isImportant)
  return (
    <div>
        <p>Is state important?</p>
       <button onClick={handleImp}>{isImportant ? "Yes" :"No"}</button> 
    </div>
  )
}

export default Important
import React from "react"
function App() {

  const [value, setValue] = React.useState(["Thing 1", "Thing 2"])

  const things = value.map(function(item){
    return(
      <h4>{item}</h4>
    )
  })

  function addItem(){
    setValue(function(item){
      return(
        [...item, `Thing ${value.length + 1}`]
        )
    })
  }

  return (
    <div className="div-button">
      <button onClick={addItem}>CLick Me !!</button> 
      {things}


    </div>
  );
}

export default App;

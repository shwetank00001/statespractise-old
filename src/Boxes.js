import React from 'react'
import box from './box'
import BoxComponent from './BoxComponent'


const Boxes = () => {

    const [boxArray, SetBoxArray] = React.useState(box)


    const boxEle = boxArray.map(function(item){
      return( 
      <div className='box'>
      <BoxComponent key={box.id} on={box.on}/>
      </div>
      )
    })

    
  return (
    <div>
        {boxEle}
    </div>
  )
}

export default Boxes

    // const mode = props.darkMode ? "#222222" : " "


    // const styles = {
    //   backgroundColor : mode  
    // style={styles} }

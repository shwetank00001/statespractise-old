import React from 'react'

const BoxComponent = (props) => {

    console.log(props.on)

    const styles = {
        backgroundColor :  props.on ? "white" : "none"
    }

    return (
    <div style={styles}  className='box' >
    </div>
  )
}

export default BoxComponent
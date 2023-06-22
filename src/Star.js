import React from 'react'
import './index.css';

const Star = (props) => {


    let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
    <div>
                    <img 
                        src={`./${starIcon}`} 
                        className="card--favorite"
                        onClick={props.clickFunc}
                    
                    />
    </div>
  )
}

export default Star
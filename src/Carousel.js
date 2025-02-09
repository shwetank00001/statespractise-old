import React from 'react'

const Carousel = () => {
    const imgArray = ["https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4PYOOovTF-KrqfH7WZsrwHUigANjdXfsoQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv4kcTedtiZ9YZJxhkUcCjKHiuSZvOIVTGQ&s"
    ]


    const [imgIndex, setIndex] = React.useState(0)

    const handleNext = function(){
        if( imgIndex === imgArray.length - 1){
            setIndex(0)
        }
        else {
            setIndex(function(index){
            return index = index + 1
        })
    }
    }
    const handlePrev = function(){
        if( imgIndex === 0){
            setIndex(imgArray.length - 1)
        }
        else {
            setIndex(function(index){
            return index = index - 1
        })
    }
    }

    const imgSize = {
        width: "400px",
        height: "400px"
    }
  return (
    <div>
    <h3>WIll make a carousel here</h3>
    <button onClick={handlePrev}>prev</button>
    <img style={imgSize} src={imgArray[imgIndex]} />
    <button onClick={handleNext}>next</button>
    </div>
  )
}

export default Carousel
import React, { useState } from 'react'

const Carousel = () => {

    const [imgIndex, setImgIndex] = useState(0)
    const data = [
                "https://i.pinimg.com/236x/f0/c0/c3/f0c0c33933dd14df7335c44a3f15ed30.jpg",
                "https://i.pinimg.com/1200x/23/5e/09/235e09099e71c062df1aea0d2babd2a6.jpg", 
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8169f7a-f0ab-4485-a9c8-2a6eb0a56662/delgo35-56bf3a81-468c-4f4e-96ea-dc868e73c37f.jpg/v1/fill/w_1280,h_890,q_75,strp/random_aesthetic_wallpaper___free_2_use__by_cocozart_delgo35-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODkwIiwicGF0aCI6IlwvZlwvYTgxNjlmN2EtZjBhYi00NDg1LWE5YzgtMmE2ZWIwYTU2NjYyXC9kZWxnbzM1LTU2YmYzYTgxLTQ2OGMtNGY0ZS05NmVhLWRjODY4ZTczYzM3Zi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.o1w_3bui0ecVpqnArToFOabfJTZzqq6vC6mIAIEzyeo",

    ]

    function prevImg(){
        if(imgIndex === 0){
            setImgIndex(data.length - 1)
        }
        else setImgIndex(function(index){
            return index = index - 1
        })
    }
    function nextImg(){
        if(imgIndex === data.length - 1){
            setImgIndex(0)
        }
        else setImgIndex(function(index){
            setImgIndex(index + 1)
   
        })
    }

    const styling = {
        height: "400px",
        width: "400px"
    }
  return (
    <div>
        <button onClick={prevImg}>Prev</button>
        <img style = {styling} src={data[imgIndex]} />
        <button onClick={nextImg}>Next</button>
    </div>
  )
}

export default Carousel
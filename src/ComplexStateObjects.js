import React from "react"


export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Shwetank",
        lastName: "Mishra",
        phone: "+91 818318311",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    

    function toggleFavorite(){
        setContact(function(item){
            return(
                {...item, isFavorite: !item.isFavorite}
            )
        })
    }
   
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <Star 
                    isFilled ={contact.isFavorite}
                    clickFunc = {toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

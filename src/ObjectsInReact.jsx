import React from "react"
import avatar from "./user.png"
import starFilled from "./star-filled.png"
import starEmpty from "./star-empty.png"
import './Obj.css'

export default function App() {

    let x = 5;
    function abx(){
        console.log("hoisitng")
    }
    abx()
    const [contact, setContact] = React.useState({
        firstName: "Shwetank",
        lastName: "Mishra",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(function(item){
            return {
                ...item,
                isFavorite: !item.isFavorite
            }
        })
    }

    let starImg = contact.isFavorite ? starFilled : starEmpty

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={starImg}
                            alt="empty star icon"
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
            
        </main>
    )
}

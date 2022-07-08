import React from "react"
import pic from '../images/Troll Face.png'

export default function Header() {
    return (
        <header className='header'>
            <img src={pic} alt="troll face" />
            <h4 className="header--title">Meme Generator</h4>
            <h5 className="header--project"> React Course-Project 3</h5>
        </header>
    )
}
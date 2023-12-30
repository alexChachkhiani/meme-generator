import React from 'react'
import TrollFace from '/troll-face.png'

export default function Header() {
  return (
    <div>
        <div className="header">
            <img src={TrollFace} alt="Troll Face" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </div>
    </div>
  )
}

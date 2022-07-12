import React from "react"


export default function Card() {
    return (
        <div className='card'>
            <div className='img-cont'>
                <img src='./images/katie-zaferes.png' className='card-img'></img>
                <div className='status'>Sold out</div>
            </div>
            <div>
                <span>
                    <img src='./images/star.png' className='star'></img>
                    <span className='rating'>5.0</span> <span className='light'>(6) - USA</span> 
                </span>
                <p className='descrip'>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
            
        </div>
    )
}
import React from 'react'
import whitecarpic from '../images/whitecarpic.webp'

export default function AutonomaSection() {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col w-2/4 justify-center'>
                <h1>Autonoma Section</h1>
                <p> Ett stycke. Klicka här för att lägga till egen
                    text. Klicka bara på ”Redigera text” eller
                    dubbelklicka för att lägga till eget innehåll
                    och ändra typsnitt. Ett utmärkt ställe att berätta
                    en kort historia så att dina användare kan lära
                    känna dig lite bättre. </p>
                <button className='flex flex-start'>Läs mer</button>
            </div>
            <div>
                <img src={whitecarpic}></img>
            </div>
        </div>
    )
}

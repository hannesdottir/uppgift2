import React from 'react'
import whitecarpic from '../images/whitecarpic.webp'

export default function AutonomaSection() {
    return (
        <div className='flex flex-row'>
            <div className='flex w-75% justify-center'>
                <div className="flex  flex-col w-1/2 justify-center">
                    <h1 className='text-5xl font-light tracking-widest leading-relaxed'>AUTONOMA FORDON</h1>
                    <p className='mt-8 font-light tracking-widest leading-relaxed w-3/4'>Ett stycke. Klicka här för att lägga till egen
                        text. Klicka bara på ”Redigera text” eller
                        dubbelklicka för att lägga till eget innehåll
                        och ändra typsnitt. Ett utmärkt ställe att berätta
                        en kort historia så att dina användare kan lära
                        känna dig lite bättre. </p>
                    <button className='flex flex-start mt-8'>Läs mer</button>
                </div>
            </div>
            <div>
                <img src={whitecarpic}></img>
            </div>
        </div>
    )
}


import React from "react";
import '.././styles/HomeStyles.css'
import homeimg from '../assets/homeimg.png'


export const HeaderHome = () => {
    return (
    <div className='divHeader py-8'>
        <div className='w-5/12 textDiv'>
            <h1> Encontrá la ayuda de confianza que necesitas</h1>
            <p>Aca vas a poder encontrar todo tipo de servicio para tu hogar, con referencia de clientes reales y con nuestro respaldo y garantía.</p>
            <button className='text-textWhite inline-flex items-center justify-center whitespace-nowrap rounded-md border-transparent bg-buttons-buttonGreen px-4 py-2 text-base font-medium shadow-sm hover:bg-indigo-700'>
                Solicita tu servicio
            </button>
        </div>
        <div className='w-5/12 justify-center'>
            <img className='object-fill'
            src={homeimg}
            />
        </div>
    </div>
    )
}
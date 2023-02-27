import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardServices } from '../components/services/CardServices';
import Dropdown from '../components/services/Dropdown';
import { useSelector } from 'react-redux';
import { useApi } from '../hooks/useApi';
import image from "../assets/Frame.png"

export const ServicesDetail = ({ props }) => {
  const [searchparams] = useSearchParams();
  const [, , , professionalsList] = useApi();
  const [professional, setProfessional] = useState([]);
  const [ciudad, setCiudad] = useState("")

  const handleOption = (e)=>{
    (e.target.value === "Todos") ?
    setCiudad(""):
    setCiudad(e.target.value)

  }


  

  

  const professionals = useSelector((state) => state.professionals);
  /* console.log(professionals.professionals); */

  const [busqueda, setBusqueda] = useState('Todos');

  useEffect(() => {
    console.log(searchparams.get("id"));
    setProfessional({ id: searchparams.get('id') });
    professionalsList(searchparams.get("id"), ciudad);
  }, [ciudad]);

  return (
    <>
      <div>ServicesDetail Header</div>
      <div className=' flex flex-col p-10 justify-evenly'>
        <div className='flex-col items-center justify-around flex'>
          <div>
            <h5 className='leading-9 text-2xl font-normal text-greyText'>
              ¿Problemas eléctricos? ¿Necesitas cambiar los interruptores?
              Nuestros técnicos tiene la solución para que tu hogar siempre esté
              iluminado.
            </h5>
            <br />
            <h5 className='leading-9 text-2xl font-normal text-greyText'>
              Puedes programar o reprogramar hasta con 24 horas de anticipación
              evitando el cobro del 100% del valor del servicio. Consulta
              nuestros Términos y condiciones para más información
            </h5>
          </div>
        </div>
        <div className='h-full flex flex-col justify-evenly'>
          <div>
            <h6 className='leading-9 text-2xl font-normal pb-5'>
              Selecciona la ciudad para tu servicio
            </h6>
            <div className='mb-4'>
              {/* agrego esta porcion de código solo para probarlo rápido */}

              <select className='text-base mx-auto mt-16 font-normal rounded-full border-2 bg-green-100 text-gray-600 h-12 w-[429px] pl-5 pr-10  hover:border-gray-400 focus:outline-none appearance-none'>
          <option onClick={handleOption}>Todos</option>

          <option  onClick={handleOption}>
          Cucuta
                </option>
        </select>













              {/* aqui termina el agregado configurarlo con el dropdown */}


              {/* <Dropdown /> */}
            </div>
          </div>
          <div className=' p-2 flex flex-wrap gap-5 items-center justify-center '>
            {
            professionals.professionals.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex max-sm:flex-col max-sm:items-center'
                >
                  <CardServices                  
                    image={image}
                    
                    description={item.description}
                    service={item.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

// Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida, convertidlo en un componente funcional que realice exactamente lo mismo:

import React, { useState, useEffect } from 'react'
// import '../../styles/clock.scss';

const Clock  = ({props}) => {

    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState('Martín');
    const [apellidos, setApellidos] = useState('San José');
    const timerID = '987987987';
    //ComponentDidMount
    useEffect(() => {
      timerID = setInterval (
        () => tick(), 1000
      );
    }, [])
    
    //ComponentWillUnmount
    useEffect(() => {
      
      return () => {
        clearInterval(timerID);
      };
    }, []);
    
    return (
      <div>
      <h2>
      Hora Actual:
      {fecha.toLocaleTimeString()}
      </h2>
      <h3>{nombre} {apellidos}</h3>
      <h1>Edad: {edad}</h1>
      </div>
    )
    
    const tick  = () =>{
      setEdad((prevState) => {
        let edad = prevState.edad +1;
        return {
            ...prevState,
            fecha: new Date(),
            edad
        }
      });
    }
}
export default Clock;
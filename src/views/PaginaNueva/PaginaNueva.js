import { color } from 'chart.js/helpers';
import React from 'react';

const PaginaNueva = () => {
  return (
    <div style={estilos.container}>
      <p style={estilos.subtitle}>
        Cliquea en este botón para dirigirte a la página de mi bestie.
      </p>
        
        <a href="https://subpolygon.com/" > <button style={estilos.btn}>Subpolygon</button> </a>

    </div>
  );
};

const estilos = {
  container: {
    color: 'gray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    background:'plum',
  },
  subtitle: {
    color: 'black',
    fontSize: '1rem',
    maxWidth: '500px',
    fontStyle: 'italic',
  },
  btn: {
    borderRadius:'8px',
    border: 'white',
    background:'black',
    color: 'hotpink',


  },
};

export default PaginaNueva;
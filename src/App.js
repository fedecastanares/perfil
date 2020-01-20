import React , {Fragment}  from 'react';
import fotoFede from './assets/img/fede.jpg';
import api from './assets/img/API.svg'
import redux from './assets/img/redux.svg'
import react from './assets/img/react.svg'
import github from './assets/img/github.svg'
import linkedin from './assets/img/linkedin.svg'
import email from './assets/img/email.svg'


function App() {
  return (
    <Fragment>
      <div className='header'>
        <div className="container paddings">
          <div className='row'>
            <div className='col'>
              <img src={fotoFede} alt='Foto de Federico Castañares' className='mx-auto d-block redonda'/>
            </div>
            <div className='col'>
              <h1 className='nombre'>Federico Castañares <span>Website</span></h1>
              <h3 className='text-right font-weight-lighter sub'>Front-end Developer</h3>
              <h5 className='text-right font-weight-lighter blanco'>federico.castanares@gmail.com</h5>
            </div>
          </div>
        </div>
        
      </div>
      <div className='about'>
        <div className='container'>
          <div>
            <h3>Desarrollador Freelance</h3>
            <p>Hola!, soy desarrollador front end freelance, he cursado el bachillerato informático y luego de forma autodidacta continúe con mis estudios hacia el desarrollo Front consumiendo APIs. <br></br>Tengo conocimiento sobre los Hooks para manejar el estado de los componentes incluyendo el useReducer como también de Redux</p>
          </div>
          <div className='row text-center'>
            <div className='col'>
              <img src={react} alt="React" srcset="Tengo conocimiento sobre React" className='rounded mx-auto d-block'/>
              <h3>React</h3>
            </div>
            <div className='col'>
              <img src={redux} alt="Redux" srcset="Tengo conocimiento sobre Redux" className='rounded mx-auto d-block'/>
              <h3>Redux</h3>
            </div>
            <div className='col'>
              <img src={api} alt="API Request" srcset="Request para distintas APIs" className='rounded mx-auto d-block'/>
              <h3>API request</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className="col"></div>
            <div className="col-6 d-flex justify-content-center">
              <a href='https://github.com/fedecastanares/'><img src={github} alt="React" srcset="Tengo conocimiento sobre React" /></a>
              <a href='https://www.linkedin.com/in/federico-casta%C3%B1ares-992a0512b/'><img src={linkedin} alt="React" srcset="Tengo conocimiento sobre React"/></a>
              <a href='mailto:federico.castanares@gmail.com'><img src={email} alt="React" srcset="Tengo conocimiento sobre React" /></a>
            </div>
            <div className="col"></div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import React from 'react'
import './styles.css'
import {FiInstagram} from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
function Forms() {
const {register, formState:{errors}, handleSubmit}= useForm();


const onSubmit = (data, event) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    
    emailjs.sendForm('service_2obrpiu', 'template_gue113l', event.target, 'EegNYD0m-p-mjRRZN')
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
      Swal.fire({
        position: 'center',
        background:'black',
        color: 'white',
        icon: 'success',
        title: 'Mensaje Enviado!',
        showConfirmButton: false,
        timer: 1500, 
      })
  };
  return (
    <div className='formulario' >
        <h2 className='form-titulo'>CONTACTO</h2>
        <div className='instagram'><div className='instagram-logo'><a href="https://www.instagram.com/bauerani/"><FiInstagram/> </a></div> <p className='instagram-titu'>@bauerani</p></div>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-seccion'>
                <label className='form-label'> NOMBRE</label>
                <input className='form-input' type="text"  placeholder='Juan Perez'{...register('nombre', {required:true})
            }/>
            {errors.nombre?.type === 'required' && <p>Este campo es obligatorio</p>}
            </div>
            <div className='form-seccion'>
                <label className='form-label'> EMAIL</label>
                <input className='form-input' type="text" placeholder='juan@gmail.com'{...register('email',{
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required:true
                })} />
                 {errors.email?.type === 'required' && <p>Este campo es obligatorio</p>}
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div className='form-seccion'>
                <label className='form-label'> MENSAJE</label>
                <textarea className='form-input textarea' type="text"  placeholder='Dejame Tu Mensaje'{...register('mensaje', {required:true})}/>
            </div>
            {errors.mensaje?.type === 'required' && <p>Este campo es obligatorio</p>}
            <button className='form-button' type="submit" value='enviar' >ENVIAR</button>
        </form>
    </div>
  )
}

export default Forms
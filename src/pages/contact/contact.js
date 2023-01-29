import './contact.css'
import Menu from '../../components/menu/menu'
import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
// import Swal from 'sweetalert2'
import emailjs from "@emailjs/browser"
import { stripBasename } from '@remix-run/router';


const Contact = () => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [assunto, setAssunto] = useState()


    let url = 'contact'
    const Swal = require('sweetalert2')


    function sendMail(e) {
        e.preventDefault()
        const emailParans = {
            from_name: nome,
            message: assunto,
            email: email
        }
        Swal.fire({
            title: 'Enviar Email?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '',
            cancelButtonColor: '',
            confirmButtonText: 'Enviar!'
        }).then((result) => {
            if (result.isConfirmed) {
                emailjs.send("service_5hef5hc", "template_wij6115", emailParans, "Rn3bMroaX6cLH8evD").then((response) => {
                    Swal.fire(
                        'Enviado!',
                        'Email enviado com sucesso!',
                        'success'
                    )
                    setNome('')
                    setEmail('')
                    setAssunto('')
                }, (err) => {
                    Swal.fire(
                        'Erro ao enviar!',
                        'Tente novamente mais tarde!',
                        'error'
                    )
                })

            }
        })

    }



    return (
        <div>
            <div>
                <Menu url={url} />
            </div>
            <div className='container '>
                <div className='contact-content'>
                    <h1>Contact</h1>
                    <div className='form-contact-background '></div>
                    <div className='form-contact'>
                        <form onSubmit={sendMail}>
                            <div className='label-float'>
                                <input className='inputForm col-md-6'
                                    required={'required'}
                                    type="text" name='name'
                                    placeholder=" "
                                    onChange={(e) => setNome(e.target.value)}
                                    value={nome} />
                                <label><b>Nome</b></label>
                            </div>

                            <div className='label-float'>
                                <input className='inputForm col-md-6'
                                    type="text" name='email'
                                    required={'required'}
                                    placeholder=" "
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} />
                                <label><b>Email</b></label>
                            </div>


                            <div className='label-float'>
                                <textarea className='inputForm col-md-10'
                                    required={'required'}
                                    placeholder=" " rows="7"
                                    onChange={(e) => setAssunto(e.target.value)}
                                    value={assunto}
                                ></textarea>
                                <label><b>Assunto</b></label>
                            </div>

                            <button className=' button-inter item9 btn-send-email' >
                                <BiMailSend />
                                Enviar
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
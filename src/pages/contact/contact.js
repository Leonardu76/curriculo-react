import './contact.css'
import Menu from '../../components/menu/menu'
import React, { useState } from "react";
import { BiMailSend, BiPhoneCall, BiLogoWhatsapp } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'

const Contact = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [errors, setErrors] = useState({ nome: '', email: '', assunto: '' })

    let url = 'contact'

    const validateField = (field, value) => {
        let message = ''
        if (!value.trim()) {
            message = 'Campo obrigatório.'
        } else if (field === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) message = 'Digite um e-mail válido.'
        }
        setErrors(prev => ({ ...prev, [field]: message }))
    }

    function sendMail(e) {
        e.preventDefault()
        validateField('nome', nome)
        validateField('email', email)
        validateField('assunto', assunto)

        if (errors.nome || errors.email || errors.assunto ||
            !nome.trim() || !email.trim() || !assunto.trim()) {
            Swal.fire({ icon: 'warning', title: 'Atenção', text: 'Corrija os campos antes de enviar.' })
            return
        }

        const emailParans = { from_name: nome, message: assunto, email: email }

        Swal.fire({
            title: 'Deseja enviar Email?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Enviar!'
        }).then((result) => {
            if (result.isConfirmed) {
                emailjs.send(
                    "service_qgqj9dq",
                    "template_wij6115",
                    emailParans,
                    "Rn3bMroaX6cLH8evD"
                ).then(() => {
                    Swal.fire('Enviado!', 'Email enviado com sucesso!', 'success')
                    setNome('')
                    setEmail('')
                    setAssunto('')
                    setErrors({ nome: '', email: '', assunto: '' })
                }).catch(() => {
                    Swal.fire('Erro!', 'Tente novamente mais tarde!', 'error')
                })
            }
        })
    }

    return (
        <div>
            <Menu url={url} />
            <div className="container col-12 col-md-9 col-lg-12">
                <div className="contact-content">
                    <h1 className="contact-title">Contato</h1>

                    <div className="contact-wrapper">
                        {/* FORMULÁRIO */}
                        <div className="form-contact">
                            <form onSubmit={sendMail}>
                                <div className="label-float">
                                    <input
                                        className="inputForm col-md-6"
                                        type="text"
                                        placeholder=" "
                                        value={nome}
                                        onChange={(e) => {
                                            setNome(e.target.value)
                                            validateField('nome', e.target.value)
                                        }}
                                    />
                                    <label><b>Nome</b></label>
                                    {errors.nome && <span className="error-text">{errors.nome}</span>}
                                </div>

                                <div className="label-float">
                                    <input
                                        className="inputForm col-md-6"
                                        type="email"
                                        placeholder=" "
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            validateField('email', e.target.value)
                                        }}
                                    />
                                    <label><b>Email</b></label>
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="label-float">
                                    <textarea
                                        className="inputForm col-md-10 text-area"
                                        placeholder=" "
                                        rows="7"
                                        value={assunto}
                                        onChange={(e) => {
                                            setAssunto(e.target.value)
                                            validateField('assunto', e.target.value)
                                        }}
                                    ></textarea>
                                    <label><b>Assunto</b></label>
                                    {errors.assunto && <span className="error-text">{errors.assunto}</span>}
                                </div>

                                <button className="button-inter item9 btn-send-email">
                                    <BiMailSend />
                                    Enviar
                                    <span></span><span></span><span></span><span></span>
                                </button>
                            </form>
                        </div>

                        <div className="contact-info">
                            <p><BiLogoWhatsapp className="icon" /> <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer">WhatsApp: (31) 98580-8502</a></p>
                            <p><BiPhoneCall className="icon" /> Telefone: (31) 98580-8502</p>
                            <p><MdEmail className="icon" /> <a href="mailto:leonardudesouza@outlook.com">leonardudesouza@outlook.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

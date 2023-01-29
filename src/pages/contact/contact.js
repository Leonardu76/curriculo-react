import './contact.css'
import Menu from '../../components/menu/menu'
import React  from "react";
import { BiMailSend } from "react-icons/bi";



const Contact = () => {
    // const [nome, setNome] = useState()
    // const [email, setEmail] = useState()
    // const [assunto, setAssunto] = useState()


    let url = 'contact'



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
                    <div className='label-float'>
                        <input className='inputForm col-md-6' type="text" name='name'
                            placeholder=" " />
                        <label><b>Nome</b></label>
                    </div>

                    <div className='label-float'>
                        <input className='inputForm col-md-6' type="text" name='name'
                            placeholder=" " />
                        <label><b>Email</b></label>
                        </div>


                        <div className='label-float'>
                        <textarea className='inputForm col-md-10' placeholder=" " rows="7"></textarea>
                        <label><b>Assunto</b></label>
                        </div>
                        <button className=' button-inter item9 btn-send-email' >
                <BiMailSend/>
                Enviar
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
                        </div>
                </div>
            </div>
            </div>

    )
}

export default Contact
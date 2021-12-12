import React, {useState} from 'react'
import './contact.scss'
import emailjs from "emailjs-com";
import { CircularProgress } from '@material-ui/core';
const Contact = () => {

    const [loading,isLoading] = useState(false);

    const [value,setValue] = useState({
        name:'',
        user_email:'',
        message:''
    });

    const [error,setError] = useState({
        name:'',
        user_email:'',
        message:''
    });

    const sendMessage = (e) => {
        e.preventDefault();
        if(validateValue()){ 
            isLoading(true);
            console.log(value);
            emailjs.sendForm("service_nsfoxah","template_3b8j1jp",e.target,"user_x6DbenTqNMXksZgVs48mS")
            .then(res => {
                console.log(res);
                setValue({name:"",user_email:"",message:""});
                setError({name:"",user_email:"",message:""});
                alert("Your email was sent successfully.");
                isLoading(false);
            }).catch(e =>{
                console.log(e?.message)
                alert("There is some problem while sending your email please try again later.");
                isLoading(false);
            });
        }else{
            console.log("validation issue");
            console.log(error);
        }
    }

    const validateValue = () => {
        if(value.name.trim() === ''){
            setError({...error,name:"Please Enter Your Name"})
            return false;
        }
        if(value.user_email.trim() === ''){
            setError({...error,user_email:"Please Enter Your Email"})
            return false;
        }
        if(value.message.trim() === ''){
            setError({...error,message:"Please Enter Your Message"})
            return false;
        }

        return true;
    }

    return (
        <div className="contact" id="contact">
            <h2 className="title" data-aos="fade-up">Contact Me</h2>
            <div className="form" >
                    <form onSubmit={sendMessage}>
                        <label data-aos="fade-right"> Name : </label>
                        <input data-aos="fade-left" className={error?.name && "errorInput"} type="text" name="name" onChange={(e) =>{ setValue({...value, name:e.target.value}); setError({...error,name:''})}} value={value?.name} placeholder="Your Name Please" />
                        <p className="error"> {error?.name} </p>

                        <label data-aos="fade-right"> Email : </label>
                        <input data-aos="fade-left" className={error?.user_email && "errorInput"} type="email" name="user_email" onChange={(e) => {setValue({...value, user_email:e.target.value}); setError({...error,user_email:''})}} value={value?.user_email} placeholder="Your Email Please"/>
                        <p className="error"> {error?.user_email} </p>

                        <label data-aos="fade-right"> Message : </label>
                        <textarea data-aos="fade-left" className={error?.message && "errorInput"} rows={8} name="message" onChange={(e) => {setValue({...value, message:e.target.value}); setError({...error,message:''})}} placeholder="Your message" value={value?.message} />
                        <p className="error"> {error?.message} </p>
                        {
                        !isLoading ?
                        <CircularProgress style={{margin:"20px"}}/> 
                        :
                        <button type="submit" data-aos="fade-up"> Send Message </button>
                        }
                    </form>
                </div>
        </div>
    )
}

export default Contact

import "./contact.css"
import Email from "../../img/email.png"
import Phone from "../../img/phone.png"
import Address from "../../img/address.png"
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


export default function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            "YOUR_TEMPLATE_ID",
            formRef.current,
            "YOUR_USER_ID"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +33 1234 556 75
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            contact@mtsysinfo.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            245 Choisy le roi, Paris France
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        challenging new projects !
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "merci beaucoup..."}
                    </form>
                </div>
            </div>
        </div>
    );
};
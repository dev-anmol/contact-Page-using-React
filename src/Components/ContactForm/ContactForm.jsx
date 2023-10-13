import React, { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../Button/button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

const ContactForm = () => {

  const [name, setName] = useState(" ");
  const [email, setEmail] =useState(" ");
  const [text, setText] = useState(" ");
  const [user, setUser] = useState(" ");

  const onSubmit = (event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
}

  return (
    <>
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
        <Button text="VIA SUPPORT CHAT"  icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL"  icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <div>
        <Button 
        isOutline={true}
        text="VIA EMAIL FORM"  icon={<HiMail fontSize="24px"/>}/>
        </div>
        <form action="" onSubmit={onSubmit} autoComplete="true">
          <div className={styles.form_controller}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>
          </div>

          <div className={styles.form_controller}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email"/>
          </div>

          <div className={styles.form_controller}>
          <label htmlFor="text">Text</label>
          <textarea name="text" id="text" rows="5"></textarea>
          </div>
          <div
          style={
            {
              display:"flex",
              justifyContent: "end"
            }
          }
          >
          <Button text="SUBMIT BUTTON"/>
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
    {
      <div className={styles.user_details}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{text}</p>
      </div>
    }
    
    </>
    
  );
};

export default ContactForm;

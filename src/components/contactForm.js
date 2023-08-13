import React, { useState, useRef } from 'react';
import Button from './button';
import './contactForm.css'
import emailjs from '@emailjs/browser'

function ContactForm() {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const[error, setError] = useState("");
    const form = useRef()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const submitMessage = async(event) => {
        // Prevent form submission
        event.preventDefault();
        // Regular expression for email validation
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        // Check if email matches the regular expression and message & username is not blank
        if (emailRegex.test(email) && message.trim !== '' && username.trim !== '') {
            // Send email
            try {
                emailjs.sendForm(
                    "service_t30b4vt",
                    "template_b3476ms",
                    form.current,
                    "AoGYZAOTQI9IgYujw"
                )
                .catch(error => console.error('Axios Email Error:', error));
                // Reset form after successful submission {Update later with react toast five}
                form.current.reset();
                setError("We have received your message!");
            } catch (error) {
                console.log("Error sending message: ", error);
            }
        }
        else{
            console.log("Invalid contact details");
            setError("Invalid input");
        }
    };
    return (
        <>
            <div className="contact-container">
                <section className="contact-section">
                    <p className="contact-section-heading">
                        CONTACT US
                    </p>
                    <p className="contact-section-text">
                        Leave a message for us!
                    </p>
                    <div className="input-areas">
                        <form ref={form}>
                            <div>
                            <input
                            className="contact-input"
                            type="text"
                            name="username"
                            placeholder="Your Name*"
                            value = {username}
                            onChange={handleUsernameChange}
                            >
                            </input>
                            </div>
                            <div>
                            <input
                            className="contact-input"
                            type="email"
                            name="email"
                            placeholder="Your Email*"
                            value = {email}
                            onChange={handleEmailChange}
                            >
                            </input>
                            </div>
                            <div>
                            <textarea
                            className="contact-input-message"
                            type="text"
                            name="message"
                            placeholder="Your Message*"
                            value = {message}
                            onChange={handleMessageChange}
                            ></textarea>
                            </div>
                            <Button buttonStyle="btn-outline" onClick={submitMessage} >Send</Button>
                        </form>
                        {/* Display error message from form*/}
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactForm;
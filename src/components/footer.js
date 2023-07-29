import React, { useState } from 'react';
import Button from './button';
import './footer.css';
import { Link } from 'react-router-dom';
import { db } from '../firebase.js';
import { doc, setDoc } from 'firebase/firestore';


function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitEmail = async (event) => {
    // Prevent form submission
    event.preventDefault();
    // Regular expression for email validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    // Check if email matches the regular expression
    if (emailRegex.test(email)) {
      try {
        const pathToUser = "emails".concat("/",email); 
        // Get reference to firebase "email" collection
        const userDoc = doc(db, pathToUser);
        // Update userDoc with new newsletter preference
        const docData = {
          newsletter: true,
        };
        setDoc(userDoc, docData, { merge:true });
        setError("Successfully signed up!")
      } catch (error) {
        console.log("Error querying database: ", error);
      }
    }
    else{
      console.log("Invalid Email: ", email);
      setError("Invalid email syntax");
    }
  };

  return (
      <div className="footer-container">
          <section className="footer-subscription">
              <p className="footer-subscription-heading">
                  Join the Carbon Loop newsletter to receive our latest updates
              </p>
              <p className="footer-subscription-text">
                  You can subscribe at any time
              </p>
              <div className="input-areas">
                  <form>
                      <input 
                      type="email"
                      name="email"
                      placeholder="Please input your email"
                      className="footer-input"
                      value={email}
                      onChange={handleEmailChange}>
                      </input>
                      <Button buttonStyle="btn-outline" onClick={submitEmail} >Subscribe</Button>
                  </form>
                   {/* Display error message from form*/}
                  {error && <p className="error-message">{error}</p>}
              </div>
          </section>
          <section className='social-media'>
      <div className='social-media-wrap'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
              CARBON LOOP
          </Link>
        </div>
        <small className='website-rights'>CARBON LOOP © 2023</small>
        <div className='social-icons'>
          {/* <Link
            className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i className='fab fa-facebook-f' />
          </Link> */}
          { <Link
            className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i className='fab fa-twitter' />
          </Link> }
          <Link
            className='social-icon-link linkedin'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin' />
          </Link>
          {/* <Link
            className='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <i className='fab fa-instagram' />
          </Link> */}
          {/* <Link
            className='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i className='fab fa-youtube' />
          </Link> */}
        </div>
      </div>
    </section>
      </div>
  );
}

export default Footer;
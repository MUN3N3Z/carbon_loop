/**
 * This file was supposed to serve as the backend of the website, handling API calls but I couldn't figure out how to send forms across from the frontend
 */
const PORT = 8000;
const emailjs = require('@emailjs/browser')
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
// Parse JSON requests
app.use(bodyParser.json());

app.post('/contact', async(req,res) => {
    const{ username, email, message } = req.body;
    var templateParams = {
        username:username,
        email:email,
        message:message,
    };
    try {
        emailjs.send(
            "service_evles8i",
            "template_wz0ho47",
            templateParams,
            "JvgN1M9SwiLVXSg-N"
        )
    } catch (error) {
        console.log("Error while sending email: ", error);
    }
});

// Listen to changes on our port
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})
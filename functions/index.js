const functions = require('firebase-functions');
const express=require('express')
const cors = require('cors')
const stripe =require('stripe')
('sk_test_51HeAwyAb7bUTLPijRDxKzrDYVs6vOsyDtvjulYu6zBOEFG2eRhcUCVl5BPfYu4fRusExQ66TPPD4XzmwUbfnMS1a00QAEYmMSC')

// API

// App config
const app=express()

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("payment request recived BOOM!!!>>>",total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //submits of currency
        currency: "INR", //country code of currency INR(indian)
      })

      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      })
    })
// Listen command
exports.api = functions.https.onRequest(app);

    
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I1OnCHJHFF84cbVxEolo9JVOQsPNweqm08RlrtLzMKFZLJgaNsYVELd3hYY51fhkzHV9JN9Ig0InHEwgmAxmLxv008MgGdcMr"
);

//API

//- App Config
const app = express();
// -MiddleWares
app.use(cors());

app.use(cors({ origin: true }));
app.use(express.json());

//- API Routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Reeived Boom!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-c7583/us-central1/api

import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"],
  })
);
app.use(express.json());

const apiKey = process.env.AUTO_PILOT_API_KEY;
const url = `${process.env.AUTO_PILOT_BASE_URL}/contact`;

app.post("/", async (req, res) => {
  const { firstName, lastName, orderNumber, email } = req.body;

  const headers = {
    autopilotapikey: apiKey,
    "Content-Type": "application/json",
  };
  const payload = {
    contact: {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      custom: {
        ["string--Order--Number"]: orderNumber,
      },
    },
  };
  try {
    await axios.post(url, payload, { headers });
  } catch (error) {
    console.log(error);
    throw new Error("Error creating contact");
  }

  res.send("OK");
});

export { app };

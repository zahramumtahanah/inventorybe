import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

const app = express ();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: 'http:/localhost:3003'
}));

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log('Server up in running');
})
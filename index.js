require('dotenv').config();
import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import menuRouter from "./src/module/menu/router";
import userRouter from "./src/module/user/router";

const app = express();

const PORT = process.env.PORT || 4000;

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log(("Connected to the db")));

app.use('/menu', menuRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

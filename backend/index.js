import express, { request } from "express";
import { PORT } from "./config.js";



const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to my Book Store!")});

app.listen(PORT, () =>{
    console.log('App is listening to the port: ${PORT}');
});
//Running the backend server RUN: npm run dev
//Enure that the node is installed in the system to make the project run!!
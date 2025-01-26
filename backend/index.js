import express, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";



const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to my Book Store!")});

    // Route for Save a new Book
app.post('./books', async(request, response) =>{
    try {

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

mongoose
.connect(mongoDBURL)
.then(()=> {
    console.log('App is connected to the database:)');
    app.listen(PORT, ()=> {
        console.log('App is listening to port: ${PORT}');
    });
})
.catch((error) => {
    console.log(error);
});
//Running the backend server RUN: npm run dev
//Enure that the node is installed in the system to make the project run!!
// Managed to connect the MongoDB DataBase to the source code
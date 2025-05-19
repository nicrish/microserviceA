import express from 'express'
import {addNewEvent,getAllEvents,getEventByID,updateEventByID,deleteEventByID, getEventByName,updateEventByName,deleteEventByName} from "./controller.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"
 
import dotenv from 'dotenv';
dotenv.config();

let MONGO_URL = process.env.MONGODB_CONNECT_STRING;
let port = process.env.PORT;

const app = express()

mongoose.connect(MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


app.get('/event', getAllEvents);
app.post('/event', addNewEvent);
app.get('/event/id/:eventID', getEventByID);
app.get('/event/name/:eventName', getEventByName);
app.put('/event/id/:eventID', updateEventByID)
app.put('/event/name/:eventName', updateEventByName)
app.delete('/event/id/:eventID', deleteEventByID)
app.delete('/event/name/:eventName', deleteEventByName)

app.listen(port, ()=> {
    console.log(`Application is listening on port: ${port}`)
})
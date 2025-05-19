
import mongoose from "mongoose"

const Schema = mongoose.Schema

export const eventSchema = new Schema({
    name:{
        type: String,
        
    },
    date:{
        type: Date,
        
    },
})
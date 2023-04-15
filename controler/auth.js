import express from "express";
const app = express();
import {schema} from "../database/schema.js"
// const prod = mongoose.Schema({
//        firstname:String,
//         surname: String,
//         email: String,
//         password: String,
//         zip: String,
//         month:String,
//         city:String
// });
import mongoose from "mongoose";
const pass = 'Bhawishya11';
const collection_name = 'ecom';
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`
mongoose.connect(mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
const auth=async  (req, res) =>
{

    let mod = mongoose.model("Register", schema);
    let data = new mod({
        firstname:req.body.firstname,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        zip: req.body.zip,
        month:req.body.month,
        city:req.body.city
    });
    await data.save();
    res.send("Registion Successfully")
}
export {auth}
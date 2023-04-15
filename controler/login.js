import express from "express";
const app = express();
import { schema } from "../database/schema.js";
import mongoose from "mongoose";
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const login = async (req, res) => {
  let modi = await mongoose.model("Register", schema).findOne({ email: req.body.email, password: req.body.password });
    if (modi!==null && modi.email && modi.password) {
    res.send("auth");
    
  } else {
    res.send("");
  }
};
export { login };

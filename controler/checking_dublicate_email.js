import mongoose from "mongoose";

//besically its check your email is present or not
//mongodb://localhost:27017
import { schema } from "../database/schema.js"
const pass = 'Bhawishya11';
const collection_name = 'ecom';
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`
mongoose.connect(mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const checking_dublicate_email = async (req, res, next) =>
{
    
    let modi = await mongoose.model("Register", schema).find({ email: req.body.email });
    if (modi.length>0)
    {
      res.send("Sorry This Email Is Allready Present")
    }
    else
    {
        next()
    }
}
export default checking_dublicate_email
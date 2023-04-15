
import mongoose from "mongoose";
const pass = 'Bhawishya11';
const collection_name = 'ecom';
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`
mongoose.connect(mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
const schema = mongoose.Schema({
       firstname:String,
        surname: String,
        email: String,
        password: String,
        zip: String,
        month:String,
        city:String
});
export {schema}
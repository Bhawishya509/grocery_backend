import express from "express"
import Route from "./Route/Route.js"
const app=express()
const PORT=process.env.PORT||8000;
import cors from "cors"
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(Route)
app.listen(PORT,()=>
{
    console.log("server is runing")
})


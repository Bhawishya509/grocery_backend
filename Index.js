import express from "express"
import Route from "./Route/Route.js"
const app=express()
import cors from "cors"
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(Route)
app.listen(8000,()=>
{
    console.log("server is runing")
})


import express from "express"
import route from "./Route/route.js"
const app=express()
import cors from "cors"
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(route)
app.listen(8000,()=>
{
    console.log("server is runing")
})


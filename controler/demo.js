import express from "express"
import route from "./Route/route.js"
const app=express()
const PORT=process.env.PORT||8000;
import cors from "cors"
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(route)
app.listen(PORT,()=>
{
    console.log("server is runing")
})


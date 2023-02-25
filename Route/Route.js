import express from "express";
import { con, con1, Sdata1, mobpro } from "../controler/cloth1.js";
import {
  fashionimage1,
  Electronics,
  Electronicspr2,
  Electronicpr3,
  Electronicpr4,
  Electronicspr5
} from "../controler/cloth2.js";
import {hmpr,toppr2,toppr1,toppr3} from "../controler/homeprod.js";
import {appliancesproduct} from "../controler/Appliancesproduct.js"
import {beautypro} from "../controler/beautypro.js"
import {grocery} from "../controler/grocery.js"
const Route = express.Router();
Route.get("/",(req,res)=>
{
  res.send("hiii")
})
Route.get("/firstProduct", con);
Route.get("/secondProduct", con1);
Route.get("/thirdProduct", Sdata1);
Route.get("/fourthProduct", mobpro);
Route.get("/fashionimage1", fashionimage1);
Route.get("/Electronics", Electronics);
Route.get("/Electronicspr2", Electronicspr2);
Route.get("/Electronicpr3", Electronicpr3);
Route.get("/Electronicpr4", Electronicpr4);
Route.get("/Electronicspr5", Electronicspr5);// ya furnature ka api ha
Route.get("/toppr1", toppr1);
Route.get("/toppr2", toppr2);
Route.get("/toppr3", toppr3);
Route.get("/hmpr", hmpr);
Route.get("/appliancesproduct",appliancesproduct);
Route.get("/beautypro",beautypro)
Route.get("/grocery",grocery)

export default Route; 
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
const route = express.Router();
route.get("/",(req,res)=>
{
  res.send("hiii")
})
route.get("/firstProduct", con);
route.get("/secondProduct", con1);
route.get("/thirdProduct", Sdata1);
route.get("/fourthProduct", mobpro);
route.get("/fashionimage1", fashionimage1);
route.get("/Electronics", Electronics);
route.get("/Electronicspr2", Electronicspr2);
route.get("/Electronicpr3", Electronicpr3);
route.get("/Electronicpr4", Electronicpr4);
route.get("/Electronicspr5", Electronicspr5);// ya furnature ka api ha
route.get("/toppr1", toppr1);
route.get("/toppr2", toppr2);
route.get("/toppr3", toppr3);
route.get("/hmpr", hmpr);
route.get("/appliancesproduct",appliancesproduct);
route.get("/beautypro",beautypro)
route.get("/grocery",grocery)

export default route; 
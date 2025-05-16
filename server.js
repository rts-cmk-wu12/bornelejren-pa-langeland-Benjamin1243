const uri = "mongodb+srv://benjismi06:x0M01LTASiolRuWb@fund.33gkhwy.mongodb.net/?retryWrites=true&w=majority&appName=fund";
import express from "express";
import ViteExpress from "vite-express";
import { MongoClient } from "mongodb"
import { use } from "react";
const app = express();

const client = new MongoClient(uri);
//dette er databasen jeg skal bruge som jeg angiver
const database = client.db("boernehjem");
//dette er tabelllen som jeg skal brge
const users = database.collection("fund");
app.use(express.json())    // <==== parse request body as JSON

app.post("/sendData", async(req, res) => {
  console.log(req.body)
  
  await users.insertOne(req.body)
  res.send("ehehrh")
});
//functionen til at vise data 


//dette er min get metode
app.get("/getData", async(_, res) => {
  console.log("Hej")
  const userData =await users.find().toArray()
    
    const userNames = userData.map(user =>{ return{name : user.name, email: "heje"}})
    res.json(userNames)
    console.log(typeof(res))
    console.log("hherhre")
});

ViteExpress.listen(app, 3000, async() => {
  
});
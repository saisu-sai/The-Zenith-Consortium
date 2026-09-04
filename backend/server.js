import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const Secret = "promethean";

app.post("/api/verify", (req,res)=>{
  const attempt = req.body.code;
  console.log(`Someone tried to login: ${attempt}`);
  if(attempt === Secret){
    res.status(200).json({message:"WELCOME, ARCHITECT."});
  }
  else {
    res.status(401).json({
      message: "Invalid",
    })
  }
})


app.listen(port, ()=>{
  console.log(`The server has started on port: ${port}`);
})
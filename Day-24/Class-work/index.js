const express =require('express');
const app = express();
const { connetdb } = require('./configs/db');
const { log } = require('console');
const { userRouter } = require('./routes/user.route');
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send(`welcome to svu backend app`)
})

app.use(userRouter);

//  npm init -y 
// npm run server

const PORT=2205;
 app.listen( PORT,async()=>{
    try{
        await connetdb
        console.log("Db is connected");
        console.log(`server is running on port http://localhost:${PORT}`);
        
        
    }catch(error){
        console.log(error);
        
    }
    
 });
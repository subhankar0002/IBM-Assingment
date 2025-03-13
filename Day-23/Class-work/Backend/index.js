const express =require('express');
const app = express();
const userRouter = require("./routes/user.route")
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send(`<h1 > welcome to Backend!!!! </h1>`)
})

app.use(userRouter)


const PORT=2202;
 app.listen( PORT,()=>{
    console.log(`server is running as port http://localhost:${PORT}`);
    
 })
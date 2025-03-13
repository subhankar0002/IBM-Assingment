const express = require('express');

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Welcome to the SVU Server!");
})

const data = [
    {name:"Soumya", age: 20},
    {name:"Panda", age: 22}
]
app.get("/data", (req, res) => {
    if(!data){
        res.status(400).send("DATA NOT FOUND");
    }else{
        res.status(200).send(data);
    }
})

app.post("/login", (req, res) => {
    try {
        if(req.body.email == "example@gmail.com"){
            res.status(200).send({"massage":"Login Successful"});
        }else{
            res.status(401).send({"massage":"Invalid Request"});
        }
    } catch (error) {
        
    }
})
const PORT = 800;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
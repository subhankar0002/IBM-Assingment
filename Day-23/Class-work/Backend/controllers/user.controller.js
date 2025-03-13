const login=(req,res)=>{
    const data=req.body;
     try{
        if(!data){
            return res.status(400).send({message:"Data not found"});
         }
         else{
            return res.status(200).send({message:"User logged in succesfully"});
         }
     }
     catch(error){
        return res.status(500).send({message:error.message});

     }
} 
const signUp=(req,res)=>{
    
    const data=req.body;
     try{
        if(!data){
            return res.status(400).send({message:"Data not found"});
         }
         else{
            return res.status(200).send({message:"User Register in succesfully"});
         }
     }
     catch(error){
        return res.status(500).send({message:error.message});

     }
}

module.exports={
    login,signUp
}
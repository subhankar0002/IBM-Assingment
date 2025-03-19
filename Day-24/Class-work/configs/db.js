const mongoose = require("mongoose");
const connetdb = mongoose.connect(`mongodb+srv://sahasubhankarkoronn:subhankar@cluster0.n9j0g.mongodb.net/day24DB?retryWrites=true&w=majority&appName=Cluster0`)
module.exports={
    connetdb
}
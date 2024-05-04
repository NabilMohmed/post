const express = require("express");
const dbconnection = require("./config/dbconnections");
const app = express();
const port = 3000;
app.use(express.json());


app.use("/users", require("./api/user.api"));
app.use("/news",require("./api/news.api"));




dbconnection();
app.use('*',(req,res)=>{
    res.json({message:"Path is wrong"})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

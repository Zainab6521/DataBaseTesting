const express = require("express");
const app=express();

const port = 8080;

app.get("/",(res,resp) => {
    resp.send("Home page");
});

app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`);
})
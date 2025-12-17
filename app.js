import  Articles  from './routers/articles.js'
import express from 'express'
const app = express()
const port = 7500

app.get("/",(req,res)=>{
    res.send(" i miei articoli")
})

app.use("/article", Articles )
app.listen(port, function(){
console.log("il server è in ascolto sulla porta:" +port);

})
import Articles from './routers/articles.js'
import express from 'express'
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    console.log("i miei articoli");
    
})

app.use("/articoli",Articles)
app.listen(port, function(){
console.log("il server è in ascolto sulla porta:" +port);

})
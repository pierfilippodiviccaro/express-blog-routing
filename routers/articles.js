import express from 'express'
const router= express.Router
//index
router.get("/",(req,res)=>{
    res.send("indice lista deglia rticoli")
})
//show
router.get("/", (req, res)=>{
    const risposta = {
        count: articoli.length,
        results: articoli
    }
    res.json (risposta)
})

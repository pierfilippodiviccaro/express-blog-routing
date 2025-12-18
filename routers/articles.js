
import express from 'express'
import { Articles } from '../data.js'
const router= express.Router()
//index
router.get("/",(req,res)=>{
    
     const risposta = {
        count: Articles.length,
        results: Articles
    }
    res.json (risposta)
})
//show
router.get("/:id", (req, res)=>{
    const id =parseInt(req.params.id)
    const Articolo = Articles.find(Article =>Article.id === id)
    if(!Articolo){
        return res.status(404).send("articolo non trovato")
    }
    else{
        res.json(Articolo)
    }
    })
    //Store
router.post("/", (req,res)=>{
    res.json("creo un nuovo articolo")
})

//update
router.put("/:id",(req,res)=>{
    const id = req.params.id
    res.send("aggiorno l'articolo numero" +id)
})

//modify
router.patch("/:id",(req,res)=>{
    const id= req.params.id
    res.send("modifico l'articolo umero"+id)
})
//destroy
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = Articles.findIndex(art => art.id === id)
    
    if (index === -1) {
        return res.status(404).json({ error: "Articolo non trovato" })
    }
    
    Articles.splice(index, 1)  
    console.log("Lista aggiornata:", Articles)  
    
    res.status(204).send() 
})
export default router

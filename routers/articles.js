
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
    if(id === Articles.id){
        const resp = Articles.find(Article => Article.id === id)
    res.json (resp)
    }
    else{
        res.json("non ci sono articoli con questo tipo di id")
    }
    })
    //Store
router.post("/", (req,res)=>{
    res.send("creo un nuovo articolo")
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
router.delete("/:id",(req,res)=>{
    const id = req.params.id
    res.send("elimino l'articolo numero"+id)
})

export default router

const express = require('express');
const router = express.Router();
const Journals = require('../models/journalSchema')

//INDUCES


//INDEX
router.get('/', async(req, res) => {
    try{
        const journals = await Journals.find()
        console.log(journals)
        // res.json(journals)
        // res.render(journals)
        res.status(200).json({
            status: "success",
            data: {
               journals,
            }
        })
    }catch(error){
        console.log(error)
    }})


//NEW
router.get('/journals/new', (req, res) => {
    res.render('New');
    // res.json('New')
})


//DELETE
router.delete('/journals/:id', async(req, res)=>{
    try {
     await Journals.findByIdAndRemove(req.params.id)
     console.log(Journals)
         res.redirect('/journals');
     }catch(error){
         console.error(error)
     }})


//UPDATE
router.delete('/journals/:id', async(req, res)=>{
    try {
     await Logs.findByIdAndRemove(req.params.id)
     console.log(Journals)
         res.redirect('/journals');
     }catch(error){
         console.error(error)
     }})


//CREATE
router.post('/journals', async(req, res) => {
    try{
        if(req.body.wasTodayAGoodDay === 'on'){
            req.body.wasTodayAGoodDay = true;
        } else { 
            req.body.wasTodayAGoodDay = false;
        }
    await Journals.create(req.body)
    res.redirect('/journals/:id')
    }catch(error){
        console.log(error)
    }})


//EDIT
router.get('/journals/:id/edit', async (req, res)=>{
    try {
        const foundJournals = await Journals.findById(req.params.id)
        res.render('Edit', 
        {Journals: foundJournals})
    } catch(error) {
        console.log(error)
      }
})



//SHOW
router.get('/journals/:id', async(req, res) => {
    try{
       console.log("LOOK HERE")
       const journals = await Journals.findById(req.params.id);
       res.render('Show', {journals: journals})
   }catch(error){
       console.log(error)
   }})


module.exports = router;
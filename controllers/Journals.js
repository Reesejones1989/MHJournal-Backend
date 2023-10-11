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
router.delete('/:id', async(req, res)=>{
    try {
     await Journals.findByIdAndRemove(req.params.id)

        //  res.redirect('/journals');
        res.send("Journal Deleted")
     }catch(error){
         console.error(error)
     }})


//UPDATE
router.put('/:id', async(req, res)=>{
    try {
     await Journals.findByIdAndUpdate(req.params.id, req.body)
     console.log(Journals)
        //  res.redirect('/journals');
        res.send("Journal updated")
     }catch(error){
         console.error(error)
     }})


//CREATE
router.post('/', async(req, res) => {
    console.log('req.body', req.body)
    try{
        if(req.body.wasTodayAGoodDay === 'on'){
            req.body.wasTodayAGoodDay = true;
        } else { 
            req.body.wasTodayAGoodDay = false;
        }
   const newJournal =  await Journals.create(req.body)
    // res.redirect('/journals/:id')
    res.json({data: newJournal})
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
router.get('/:id', async(req, res) => {
    try{
       console.log("LOOK HERE")
       const journals = await Journals.findById(req.params.id);
    //    res.render('Show', {journals: journals})
    res.json({data: journals})
   }catch(error){
       console.log(error)
   }})


module.exports = router;
const router = require('express').Router();
const { notes } = require('../../Develop/db/db.json');
const {filterByQuery, findById, createNewNote}=require('../../lib/note');


router.get('/notes',(req,res)=>{
    let results = notes;
    if (req.query){
        results=filterByQuery(req.query, results)
    }
    res.json(results);
})

router.post('/notes',(req,res)=>{
    req.body.id= notes.length.toString();
    const note = createNewNote(req.body,notes);
    res.json(note);

})

router.get('/notes/:id',(req,res)=>{
    const result=findById(req.params.id,notes);
    if(result){
        res.json(result);

    }else{
        res.send(404);
    }
})

module.exports = router;
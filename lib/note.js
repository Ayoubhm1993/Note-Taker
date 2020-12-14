const { notes } = require('../Develop/db/db.json');
const fs = require('fs');
const path=require('path');

function filterByQuery(query,noteArray){
    
    let filteredResults = noteArray;
    if (query.title){
       filteredResults=filteredResults.filter(note=>note.title === query.title)
}if (query.text){
    filteredResults=filteredResults.filter(note=> note.text === query.text)

}else{
    console.log('The note is not available')
}
return filteredResults;
}
    
function createNewNote(body,noteArray){
    let note=body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname,'../Develop/db/db.json'),
        JSON.stringify({ notes: noteArray },null,2)
    );
    return note;
}

function findById(id, noteArray) {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
  }

  module.exports={
      filterByQuery,
      createNewNote,
      findById

  }


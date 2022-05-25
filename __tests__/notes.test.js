const fs = require("fs");
const {
    findById, createNotes, validateNotes
} = require("../lib/notes.js");
var data = require("../data/db");

test("creates a note", () => { 
    const Notes = createNotes( 
        { Id: "1", title: "Bobsaget", text: "lorem ipsum my touch"}, 
       
    ); 
    expect(Notes.Id).toBe("1"); 
    expect(Notes.title).toBe("Bobsaget"); 
    expect(Notes.text).toBe("lorem ipsum my touch"); 
}); 

test("checks by id", () => { 
    const db = [
        {
            Id: "2", 
            title: "Sarah", 
            text: "samwell is high"
        }, 
        {
            Id: "3", 
            title: "Sam", 
            text: "samwell is nigh"
        }
    ]; 

    const result = findById("3", data); 
    expect(result.title).toBe("Sam"); 
    console.log(title)
});  

test("validate Notes", () => { 
    const startingNote5 =   {
            Id: "3", 
            title: "Sarah", 
            text: "samwell is high"
        }; 
    
    const startingNote7 = {
            Id: "4", 
            title: "Pete", 
           
        };
     
        const result = validateNotes(startingNote5);
        const result2 = validateNotes(startingNote7);

        expect(result).toBe(true);
        expect(result2).toBe(false);
}); 

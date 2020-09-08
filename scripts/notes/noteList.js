//map over an array and display all notes from Note.js
import { getNotes, useNotes } from "./noteProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { useCriminals } from "../criminals/criminalProvider.js";

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

const render = (notes) => {
    const criminals = useCriminals()
    
   let HTMLArray = notes.map((noteObj) => {
        return NoteHTMLConverter(noteObj);
   })
   console.log("HTMLArray", HTMLArray);
    contentTarget.innerHTML = HTMLArray.join("")
   };
   /*
   const render = (notes) => {
    const criminals = useCriminals()
    contentTarget.innerHTML = notes.map((noteObject) => {
            return NoteHTMLConverter(noteObject)
        }).join("");
}
*/

export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
};


eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
});
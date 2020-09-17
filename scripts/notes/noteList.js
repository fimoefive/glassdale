//map over an array and display all notes from Note.js
import { getNotes, useNotes } from "./noteProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { useCriminals, getCriminals } from "../criminals/criminalProvider.js";

const contentTarget = document.querySelector(".noteListContainer");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes, useCriminals())
});

const render = (notes, suspects) => {
    contentTarget.innerHTML = notes.map((noteObj) => {
        noteObj.suspectObj = suspects.find(suspect => {
            return suspect.id === parseInt(noteObj.suspect.Id)
         
        })
            return NoteHTMLConverter(noteObj)
    }).join("");
};

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const suspects = useCriminals()
            render(notes, suspects)
        })
};
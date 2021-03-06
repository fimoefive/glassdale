import { getCriminals, useCriminals } from "../criminals/criminalProvider.js";
import { saveNote } from "./noteProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteContentent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")

        if (noteCriminal.value !== "0") {
            const newNote = {
                noteText: noteContentent.value,
                suspectId: parsedInt(noteCriminal.value),
                date: Date.now()
            }
            saveNote(newNote);

        } else {
            window.alert("Choose a Suspect");
        }
    }
});

const render = (criminalArray) => {
    contentTarget.innerHTML = `
        
        <br>
        <input type="text">
    <h3>New Note Details</h3>
    <textarea id="noteForm--text" placeholder="Put a note here"></textarea>

    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a Criminal..</option>
    ${criminalArray.map(criminalObj => {
        return `
            <option value="${criminalObj.id}">${criminalObj.name}</option>`
    }).join("")
        }
    </select>
    <button id="saveNote">Save Note</button>
    `
};

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(useCriminals());
        })
};
import { getOfficers, useOfficers } from "./officerProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("officerChosen", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        
        const officerEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        // renderOfficers(officerEvent);
        // Dispatch event to event hub
        eventHub.dispatchEvent(officerEvent)
    }
});

const contentTarget = document.querySelector(".filters__officer");

export const OfficerSelect = () => {
	getOfficers()
	.then(() => {
        // Get all convictions from application state
        const officerArray = useOfficers()
        render(officerArray)
    })
};


const render = officersArray => {
	contentTarget.innerHTML = `
		<select class="dropdown" id="officerSelect">
			<option value="0">Please select an officer...</option>
			${
                officersArray.map(officerObj => {
                    return `<option value="${ officerObj.name }">${officerObj.name}</option>`
                }).join("")
            }
		</select>
    `
        };

/*
eventHub.addEventListener("officerSelect", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.???

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    criminals.???(
        criminalObject => {
            if (criminalObject.??? === officerName) {
                return true
            }
        }
    )
});
*/
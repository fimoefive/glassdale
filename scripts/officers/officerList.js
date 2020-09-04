import { OfficerHTML } from "./officer.js";
import { getOfficers, useOfficers } from "./officerProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("officerChosen", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        // const officerEvent = useOfficers().filter(officer => {
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

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers();
            // console.log('officerArray', officerArray);
            renderOfficers(officerArray);
        })
};

const renderOfficers = (officerArray) => {
    const targetElement = document.querySelector(".officersContainer");

    let HTMLArray = officerArray.map(singleOfficer => {
        return OfficerHTML(singleOfficer);
    })
    // console.log("HTMLArray", HTMLArray);

    targetElement.innerHTML = HTMLArray.join("");
};
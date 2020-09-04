import { OfficerHTML } from "./officer.js";
import { getOfficers, useOfficers } from "./officerProvider.js";

export const OfficerList = () => {
        getOfficers()
        .then(() => {
            const officerArray = useOfficers();
            console.log('officerArray', officerArray);
            renderOfficers(officerArray);
        })
};

const renderOfficers = (officerArray) => {
    const targetElement = document.querySelector(".officersContainer");

    let HTMLArray = officerArray.map(singleOfficer => {
        return OfficerHTML(singleOfficer);
    })
        console.log("HTMLArray", HTMLArray);

    targetElement.innerHTML = HTMLArray.join("");
};
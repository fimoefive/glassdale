import { getCriminals, useCriminals } from "./criminalProvider.js";
import { CriminalHTML } from "./criminals.js";

const eventHub = document.querySelector(".container");

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    const contentTarget =  document.querySelector(".officerSelect")
    // console.log("which officer is selected?", contentTarget.value);

    if (event.detail.crimeThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = useCriminals().filter(criminal => {
            console.log(criminal.conviction, event.detail.crimeThatWasChosen);
            return criminal.conviction === event.detail.crimeThatWasChosen
        });
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
        console.log(matchingCriminals);
        render(matchingCriminals);
    } else {
        render(useCriminals())
    }
});

// const officerEvent = useOfficers().filter(officer => {
eventHub.addEventListener("officerSelected", event => {
    if (event.detail.officerThatWasChosen !== "0") {
        
    // Filter the officers application state down to the people that committed the crime
        
        const matchingCriminals = useCriminals().filter(criminal => {
            console.log(criminal.conviction, event.detail.crimeThatWasChosen);
            return criminal.arrestingOfficer === event.detail.officerThatWasChosen
        });
        console.log(matchingCriminals);
        render(matchingCriminals);
    } else {
        render(useCriminals())
    }
});
/*
    // How can you access the officer name that was selected by the user?
    const officerName = event.???

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    criminals.??? (
        criminalObject => {
            if (criminalObject.??? === officerName) {
                return true
            }
        }
    )
})
*/

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const appStateCriminals = useCriminals();
        console.log('appStateCriminals', appStateCriminals);
        render(appStateCriminals);
    })
};

const render = appStateCriminals => {
    const targetElement = document.querySelector(".criminalsContainer");

    let HTMLArray = appStateCriminals.map(singleCrimianl => {
        return CriminalHTML(singleCrimianl);
    })
    // console.log("HTMLArray", HTMLArray);
    targetElement.innerHTML = HTMLArray.join("")
};
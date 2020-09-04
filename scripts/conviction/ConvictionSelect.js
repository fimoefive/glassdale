console.log("is this working")
import { useConvictions, getConvictions } from "./ConvictionProvider.js";

/*
    const addConvictionToDom = (convictionArray) => {
        const contentTarget = document.querySelector(".filters__crime");
        let HTMLArray = convictionArray.map(singleConviction => {
            return ConvictionHTML(singleConviction);
        })
        console.log("HTMLArray", HTMLArray);
        contentTarget.innerHTML = HTMLArray.join("");
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */ 
    // };
   

    // Which element in your HTML contains all components?
    // That's your Event Hub. Get a reference to it here.
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {
    console.log("change");
    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        console.log("if statement");
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
                // crimeId: event.target.id
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
});


     const renderHTML = (convictionArray) => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionArray.map(convictionObj => {
                        const conviction = convictionObj.name
                    return `<option value=${conviction}> ${conviction}</option>`})
                }
            </select>
            `
    };

//     render(convictions)
// }
export const ConvictionList = () => {
    getConvictions()
        .then(() => {
    const convictions = useConvictions();
    // console.log("convictionArray", convictions);
    renderHTML(convictions);
    })
};
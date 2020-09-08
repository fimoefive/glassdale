import { getWitnesses, useWitness } from "./witnessProvider.js";
import {witnessHTML} from "./witness.js";


export const witnessList = () => {
    getWitnesses()
    .then(() => {
        const witnessArray = useWitness();
        console.log('witnessArray', witnessArray);
        renderWitness(witnessArray);
    })
};

const renderWitness = (witnessCollection) => {
const domElement = document.querySelector(".witnessContainer");

let HTMLArray = witnessCollection.map(singleWitness => {
    return witnessHTML(singleWitness);

})
    console.log("HTMLArray", HTMLArray);

domElement.innerHTML = HTMLArray.join("")
};
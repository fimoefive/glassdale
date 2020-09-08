
export const witnessHTML = (witnessObj) => {
    return `
    <section id="witness-${witnessObj.id}"> 
    <div class="criminal-card">
        <p>Name: ${witnessObj.name}</p>
        <p>Statement: ${witnessObj.statements}</p>
    </section>
    `
};
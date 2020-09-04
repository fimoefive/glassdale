export const OfficerHTML = (officerObj) => {
    return `
        <section id="officer-${officerObj.id}"> 
        <div class="officer-card">
            <h2>Name: ${officerObj.name}</h2>
        </div>
        </section>
    `
};
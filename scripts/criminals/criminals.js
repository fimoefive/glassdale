export const CriminalHTML = (criminalObj) => {
    return `
        <section id="crimianl-${criminalObj.id}"> 
        <div class="criminal-card">
            <h2>Name: ${criminalObj.name}</h2}
            <div>Age: ${criminalObj.age}</}
            <h4>Crime: ${criminalObj.conviction}</h4}
            <h4>${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</h4>
            <h4>${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</h4>
            </div>
        </section>
    `
};
// take notes made and display to the Dom.

const eventHub = document.querySelector("#main")


export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note--title">Criminal: ${ noteObject.suspect }</div>
            <div class="note--content">${ noteObject.noteText }</div>
            <div class="note--timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
        </section>
    `
}
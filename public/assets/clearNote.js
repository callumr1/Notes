const note = $(".note");

function clearNote(){
    note.empty();
}

function clearDefaultText() {
//    if the note contains the default text "Click here and begin typing..." then clear the text
    if(note.text().includes("Click here and begin typing...")) {
        note.empty();
    }
}
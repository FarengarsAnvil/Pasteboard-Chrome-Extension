
//Defining Constants and DOM objects for manipulation with JS Functions below.\\
let pasteBoard = [];
const listElement = document.getElementById("l1");
const inputField = document.getElementById("input");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clr-btn");
const localArray = JSON.parse(localStorage.getItem("pasteBoard"));
const delButton = document.getElementById("del-btn");


//Retrieves pasteBoard Vals stored in localStorage and renders them, so long it is not empty. 
if (localArray) {
    pasteBoard = localArray;
    rendering();
}



// Event Listener on the Save button, grabs the User input from Input field, and adds to pasteBoard array.
saveButton.addEventListener("click" ,() => {
    pasteBoard.push(inputField.value);
    rendering()
    localStorage.setItem("pasteBoard",JSON.stringify(pasteBoard));
    inputField.value = "";

})

//Event listener to clear the pasteBoard array, triggered by clicking del button \\

clearButton.addEventListener("click", () => {
    confirm("Are you sure? This cannot be undone");
    if(confirm) {
        localStorage.clear();
        pasteBoard = [];
        location.reload();
    }
    else {
        return;

    }
})

//Deletes Specific Pasteboard Entry, when prompted by the usr which one to delete and re-renders the Board\\.

delButton.addEventListener("click", () => {
  
    let indexValue = prompt("Enter Number of Paste Link you wish to remove:");
    let index = parseInt(indexValue);
    console.log(index, pasteBoard.length);
    if( index <= 0 || index > pasteBoard.length) {

        alert("Invalid Number");
    }
    else { 
        delete pasteBoard[index-1];
        localStorage.setItem("pasteBoard",JSON.stringify(pasteBoard));
        rendering();
    }

    location.reload();

})

function rendering() {

    let listItem = "";
    for ( let i =0; i< pasteBoard.length; i++) {
        listItem += "<li>" + pasteBoard[i] + "</li>";
    }

    listElement.innerHTML = listItem;
}


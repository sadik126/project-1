//console.log("welcome to sadik");

//If user adds a node, it saved in a local storage.

//fake edit

shownotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {


    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];

    }

    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    //console.log(notesobj);
    shownotes();


});

//function to show elements local storage
function shownotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];

    }

    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";

    notesobj.forEach(function (element, index) {
        html += `
  <div class=" notecard my-2 mx-2 card" style="width: 18rem;">
        
  <div class="card-body">
    <h5 class="card-title">note ${index + 1}</h5>
    <p class="card-text">${element}</p>
    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
  </div>
</div>`;


    });


    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `please add your notes first`;
    }




}


//function to delete note

function deleteNote(index) {

    //console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];

    }

    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}


let search =document.getElementById("searchtxt");
search.addEventListener("input",function(){
let inputval = search.value.toLowerCase(); 
//console.log("input fired",inputval);
let notecards = document.getElementsByClassName('notecard');
Array.from(notecards).forEach(function(element){


    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    if(cardtxt.includes(inputval)){
        element.style.display = "block";
    }
    else
    {
        element.style.display = "none";
    }
})


})




//  
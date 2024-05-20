// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById("list");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
const input = document.getElementById("input");

// Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables
let LIST
let id

//get item from local storage
let data = localStorage.getItem("TODO");



//Check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
}else{
    //if data isn't empty
    LIST = [];
    id = 0;
}


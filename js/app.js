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

//load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addtoDo(item.name, item.id, item.done, item.trash);
    
    });
}

//clear local storage 
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload()
});

//show todays date 
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dataElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function
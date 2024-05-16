// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById("list");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
const input = document.getElementById("input");

const element = document.getElementById("element");
element.insertAdjacentHTML(position, text);

    "beforebegin"
    "afterbegin"
    "beforeend"
    "afterend"

element.innerHTML(text);



function addToDo( toDo ) {
const text = <li class="item">
    <i class="co fa fa-circle-thin" job="complete"></i>
    <p class="text"> Drink Coffee </p>
    <i class="de fa fa-trash-o" job="delete"></i>
</li>

const position = "beforeend";

list. insertAdjacentHTML(position, text);
}
addToDo("Drink Coffee");

document.addEventListener("keyup",function(){
        if(event.keyCode == 13){
            const toDo = input.value ;
            if (toDo) {
                addToDo();
            }
            input.value ="";
        }

});


let LIST = [];
let id = 0;
LIST = [{} , {} ,  ];



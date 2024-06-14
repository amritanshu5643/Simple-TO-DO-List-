let input = document.getElementById("task-input");
let text = document.querySelector(".text");

function Add(){
    if(input.value == ""){
        alert("Enter your task first")
    }else{
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${input.value} <ion-icon class="icon" name="trash-bin-sharp"></ion-icon>`;
        text.appendChild(newElement);
        input.value = "";
        newElement.querySelector(".icon").addEventListener("click", remove);
        function remove(){
            newElement.remove();
        }
    }
}
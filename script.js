var playerToggle = "O";
var array = Array(9).fill(null);

function checkWinner(){
    if((array[0] != null && array[0] == array[1] && array[1] == array[2]) 
    || (array[0] != null && array[0] == array[4] && array[4] == array[8]) 
    || (array[0] != null && array[0] == array[3] && array[3] == array[6]) 
    || (array[1] != null && array[1] == array[4] && array[4] == array[7]) 
    || (array[2] != null && array[2] == array[4] && array[4] == array[6]) 
    || (array[2] != null && array[2] == array[5] && array[5] == array[8]) 
    || (array[3] != null && array[3] == array[4] && array[4] == array[5]) 
    || (array[6] != null && array[6] == array[7] && array[7] == array[8])){
        document.querySelector("#cell-container").style.zIndex = "-1";
        document.querySelector("#msg-container").style.zIndex = "1";
        document.querySelector("#msg-container h1").innerText = `Winner is ${playerToggle}`;  
        return;
    }
    
    if(!array.some(e => e === null)){
        document.querySelector("#cell-container").style.zIndex = "-1";
        document.querySelector("#msg-container").style.zIndex = "1";
        document.querySelector("#msg-container h1").innerText = `Game Draw`;  
    }
}

document.querySelectorAll(".cell").forEach((elem) => {
    elem.addEventListener("click", () => {
        var id = Number(elem.id);
        if(array[id] != null){
            return;
        }
        array[id] = playerToggle;
        elem.innerHTML = `<h1>${playerToggle}</h1>`;
        checkWinner();
        playerToggle = playerToggle === "O" ? "X" : "O";
    })
})

function reset(){
    document.querySelectorAll(".cell").forEach((elem) => {
        elem.innerHTML = "";
        array[elem.id] = null;
    })
    playerToggle =  "O";
}

function newgame(){
    document.querySelector("#cell-container").style.zIndex = "1";
    document.querySelector("#msg-container").style.zIndex = "-1";
    reset();
}
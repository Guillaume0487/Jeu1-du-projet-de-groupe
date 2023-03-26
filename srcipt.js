let lstWiners = []

function verify1() {
    if (lstWiners.length > 0) {
        return;
    } if (document.getElementsByClassName("card").length > 1) {
        play1();
    } else {
        return;
    }
}

function play1() {
    const tirage = setInterval(() => {
        let select = Math.ceil(Math.random() * document.getElementsByClassName("card").length - 1);
        blink(select);
    }, 250);
    setTimeout(() => {
        clearInterval(tirage);
        let select = Math.ceil(Math.random() * document.getElementsByClassName("card").length - 1);
        const winner = setInterval(() => {
            blink(select);
        }, 500);
        setTimeout(() => {
            clearInterval(winner);
            setTimeout(() => {
                const playerWin = document.getElementsByClassName("card")[select];
                playerWin.className = "winer";
                lstWiners.push(playerWin.id)
            }, 200);
        }, 1500);
    }, 3000);
}

function blink(index) {
    document.getElementsByClassName("card")[index].style.backgroundColor = "#008080";
    document.getElementsByClassName("card")[index].style.color = "white";
    setTimeout(() => {
        document.getElementsByClassName("card")[index].style.backgroundColor = "";
        document.getElementsByClassName("card")[index].style.color = "";
    }, 200);
}

function rePlay() {
    refresh()
    play1()
}

function refresh() {
    const winer = document.getElementsByClassName("winer");
    lstWiners = [];
    while (winer.length > 0) {
        for (let i = 0; i < winer.length; i++) {
            winer[i].className = "card";
        }
    } document.getElementById("lst-winers").remove();
    const newDiv = document.createElement("div");
    newDiv.id = "lst-winers";
    document.getElementById("players-win").appendChild(newDiv);
}
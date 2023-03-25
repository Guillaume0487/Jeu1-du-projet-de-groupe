let lstWiners = []
//verif
function verify1() {
    if (lstWiners.length > 0) {
        return;
    } if (document.getElementsByClassName("card").length > 1) {
        cacherBtn(1)
        play1();
    } else {
        return;
    }
}

function verify2() {
    if (lstWiners.length > 0) {
        return;
    } if (document.getElementsByClassName("card").length > 3) {
        cacherBtn(2)
        play2();
    } else {
        return;
    }
}

function play1() {
    const winer = Math.ceil(Math.random() * document.getElementsByClassName("card").length - 1);
    const playerWin = document.getElementsByClassName("card")[winer].id
    let i = 0;
    const Timer = setInterval(() => {
        document.getElementsByClassName("card")[i].style.backgroundColor = "";
        setTimeout(() => {
            document.getElementsByClassName("card")[i].style.backgroundColor = "navy";
        },);
        i++;
        if (i == document.getElementsByClassName("card").length) {
            i = 0;
        }
    }, 150);
    setTimeout(() => {
        clearInterval(Timer);
        for (let j = 0; j < document.getElementsByClassName("card").length; j++) {
            document.getElementsByClassName("card")[j].style.backgroundColor = "";
        } document.getElementsByClassName("card")[winer].className = "winer";
        podium(playerWin);
    }, 5000);
}

function play2() {
    play1();
    setTimeout(() => {
        play1();
        setTimeout(() => {
            play1();
        }, 5000);
    }, 5000);
}

function podium(str) {
    document.getElementById("lst-winers").remove();
    let er_eme = "er"
    if (lstWiners.length > 0) {
        er_eme = "eme";
    } lstWiners.push(str + " est " + (lstWiners.length + 1) + er_eme + "\n");
    const newDiv = document.createElement("div");
    newDiv.id = "lst-winers";
    newDiv.innerText = lstWiners;
    document.getElementById("players-win").appendChild(newDiv);
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

function cacherBtn(n) {
    for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
        document.getElementsByClassName("btn")[i].hidden = true
    } if (n == 1) {
        setTimeout(() => {
            for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
                document.getElementsByClassName("btn")[i].hidden = false
            }
        }, 5000);
    } if (n == 2) {
        setTimeout(() => {
            for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
                document.getElementsByClassName("btn")[i].hidden = false
            }
        }, 5000 * 3);
    }
}
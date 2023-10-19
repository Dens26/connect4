columnTabValue = [-1, -1, -1, -1, -1, -1];
connect4Value = [];
playerColor = "jaune";
continu = true;
winner = "";

for (let i = 0; i < 6; i++) {
    connect4Value.push([...columnTabValue]);
}
connect4Value.push(columnTabValue);


const column = document.querySelectorAll(".column");
const jeton = document.querySelector(".jeton");
const player = document.querySelector(".player");
const playAgainBtn = document.querySelector(".play-again-btn");

// Ecouteur
for (let c = 0; c < column.length; c++) {
    column[c].addEventListener("click", evt => {
        if (continu) {
            for (let r = 5; r >= 0; r--) {
                if (connect4Value[c][r] == -1) {
                    if (playerColor == "jaune") {
                        fillTheGame(c, r, "rouge");
                    }
                    else {
                        fillTheGame(c, r, "jaune");
                    }
                    break;
                }
            }
        }
    })
}
playAgainBtn.addEventListener("click", evt => {
    location.reload();
})


/**
 * Fonction qui remplit le tableau de jetons
 * @param {*} c 
 * @param {*} r 
 * @param {*} color 
 */
function fillTheGame(c, r, color) {
    column[c].children[r].children[0].style.cssText = "display:inherit;";
    column[c].children[r].children[0].src = `../images/${playerColor}.png`;
    jeton.src = `../images/${color}.png`;
    connect4Value[c][r] = playerColor;
    verification(c, r);
    playerColor = color;
}

/**
 * Fonction qui vérifie si il y a un gagnant
 * @param {*} column 
 * @param {*} row 
 */
function verification(column, row) {
    console.log(column, row);
    let nbr = 0;
    // Vérification de la colonne
    for (let i = 0; i < 6; i++) {
        if (connect4Value[column][i] == playerColor)
            nbr++;
        else
            nbr = 0;

        if (nbr == 4) {
            congratulationMessage();
            break;
        }
    }
    nbr = 0;
    // Vérification de la ligne
    for (let i = 0; i < 7; i++) {
        if (connect4Value[i][row] == playerColor)
            nbr++;
        else
            nbr = 0;

        if (nbr == 4) {
            congratulationMessage();
            break;
        }
    }
    // Vérification de la diagonale droite basse
    win = false;
    try {
        if (connect4Value[column][row] == connect4Value[column - 1][row + 1] &&
            connect4Value[column][row] == connect4Value[column - 2][row + 2] &&
            connect4Value[column][row] == connect4Value[column - 3][row + 3]) {
            win = true;
            congratulationMessage();
        }
    }
    catch {
    }
    // Vérification de la diagonale gauche basse
    if (!win) {
        try {
            if (connect4Value[column][row] == connect4Value[column + 1][row + 1] &&
                connect4Value[column][row] == connect4Value[column + 2][row + 2] &&
                connect4Value[column][row] == connect4Value[column + 3][row + 3]) {
                win = true;
                congratulationMessage();
            }
        }
        catch {
        }
    }
    // Vérification de la diagonale droite haute
    if (!win) {
        try {
            if (connect4Value[column][row] == connect4Value[column - 1][row - 1] &&
                connect4Value[column][row] == connect4Value[column - 2][row - 2] &&
                connect4Value[column][row] == connect4Value[column - 3][row - 3]) {
                win = true;
                congratulationMessage();
            }
        }
        catch {
        }
    }
    // Vérification de la diagonale gauche haute
    if (!win) {
        try {
            if (connect4Value[column][row] == connect4Value[column - 1][row + 1] &&
                connect4Value[column][row] == connect4Value[column - 2][row + 2] &&
                connect4Value[column][row] == connect4Value[column - 3][row + 3]) {
                win = true;
                congratulationMessage();
            }
        }
        catch {
        }
    }
}

/**
 * Fonction qui fini la partie et propose une nouvelle partie
 */
function congratulationMessage() {
    continu = false;
    winner = playerColor;
    playAgainBtn.style.cssText = "display: block;";
    player.innerHTML = `Le joueur <img class="jeton" src="../images/${winner}.png" alt="jeton"> à remporté la partie`;
}
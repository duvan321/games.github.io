let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randonNumber = Math.floor(Math.random() * 3);
  return choices[randonNumber];
}

function convertWorld(letter) {
  if (letter === "r") return `🥌`;
  if (letter === "p") return `📃`;
  return `✂️`;
}

function crearMensajeFinal(resultadoFinal) {
  let parrafo = document.getElementById("pa");
  parrafo.innerHTML = resultadoFinal;

  let reiniciar = document.getElementById("reiniciar");
  reiniciar.style.display = "block";
  let rock_div = document.getElementById("r");
  rock_div.disabled = true;
  let paper_div = document.getElementById("p");
  paper_div.disabled = true;
  let scissor_div = document.getElementById("s");
  scissor_div.disabled = true;
}

function win(userChoice, computerChoice) {
  const smallUserWorld = " Jugador ".fontsize(3).sub();
  const smallCompWorld = " Enem. ".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertWorld(userChoice)} 
   ${smallUserWorld} Versos  
   ${smallCompWorld} ${convertWorld(computerChoice)}
    :<br/> Ganaste`;
  userChoice_div.classList.add("greend-glow");
  setTimeout(() => userChoice_div.classList.remove("greend-glow"), 1000);
}

function lose(userChoice, computerChoice) {
  const smallUserWorld = " Jugador ".fontsize(3).sub();
  const smallCompWorld = " Enem. ".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertWorld(userChoice)} 
   ${smallUserWorld} Versos  
   ${smallCompWorld} ${convertWorld(computerChoice)} 
    :<br/>  Perdiste`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 1000);
}
function draw(userChoice, computerChoice) {
  const smallUserWorld = " Jugador ".fontsize(3).sub();
  const smallCompWorld = " Enem. ".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${convertWorld(userChoice)} 
   ${smallUserWorld} Versos  
   ${smallCompWorld} ${convertWorld(computerChoice)}
    :<br/> Empate`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
  revisarpuntajes();
}
//revisar puntajes
function revisarpuntajes() {
  if (userScore == 3) {
    crearMensajeFinal("Felicitaciones! Ganaste");
  } else if (computerScore == 3) {
    crearMensajeFinal("Lo siento! Perdiste");
  }
}
//inicio de juego
function main() {
  let rock_div = document.getElementById("r");
  rock_div.addEventListener("click", () => game("r"));
  let paper_div = document.getElementById("p");
  paper_div.addEventListener("click", () => game("p"));
  let scissor_div = document.getElementById("s");
  scissor_div.addEventListener("click", () => game("s"));
  /*rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissor_div.addEventListener("click", () => game("s"));*/
  let reiniciar = document.getElementById("reiniciar");
  reiniciar.style.display = "none";
  let botonReiniciar = document.getElementById("reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

main();
function reiniciarJuego() {
  location.reload();
}

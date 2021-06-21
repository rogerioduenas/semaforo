const img = document.getElementById ("img");
const buttons = document.getElementById ("buttons");
let corIndex = 0;
let intervalId = null
const troca_cor = (event) => {
    pararAut();
    turnON[event.target.id]();
}
const nextIndex = () => {
    if (corIndex < 2) {
        corIndex++
    } else {
        corIndex = 0
    }
}
const troca_cor_aut = () => {
    const cores = ["vermelho", "amarelo", "verde"];
    const cor = cores[corIndex];
    turnON[cor]();
    nextIndex();
}
const pararAut = () => {
    clearInterval (intervalId);
}
const turnON = {
    "vermelho": () => img.src = "./assets/vermelho.jpg",
    "amarelo": () => img.src = "./assets/amarelo.jpg",
    "verde": () => img.src = "./assets/verde.jpg",
    "automatico" : () => intervalId = setInterval(troca_cor_aut, 1000)
}
buttons.addEventListener("click", troca_cor);

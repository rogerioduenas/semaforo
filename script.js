const img = document.getElementById ("img");
const buttons = document.getElementById ("buttons");
let corIndex = 0;
let intervalId = null
//é uma arrow function, quando clica 
//coleta o id do objeto clicado a chama a função
const troca_cor = (event) => {
    //chama a funcao clicando em qualquer uma das cores
    pararAut();
    turnON[event.target.id]();
}
// essa função tb poderia ser em forma de ternario
// const nextIndex = () => corIndex = corIndex < 2 ? ++corIndex : 0
const nextIndex = () => {
    //se a cor for meenor que 2 index+1
    if (corIndex < 2) {
        corIndex++
        //volta para o zero e recomeça o processo
    } else {
        corIndex = 0
    }
}
// essa função executa a troca de cores
const troca_cor_aut = () => {
    const cores = ["vermelho", "amarelo", "verde"];
    //pega o index das cores
    const cor = cores[corIndex];
    //pega o index das cores
    turnON[cor]();
    //executa a funçao acima pegando o proximo index das cores
    nextIndex();
}
//para de trocar cor automatico 
//clicando em qualquer uma das cores
const pararAut = () => {
    //limpa o intervalo onde o id esta alocado
    clearInterval (intervalId);
}
//objeto com varias funcoes onde coleta o id na linha 4 
//e executaa troca da imagem
const turnON = {
    "vermelho": () => img.src = "./assets/vermelho.jpg",
    "amarelo": () => img.src = "./assets/amarelo.jpg",
    "verde": () => img.src = "./assets/verde.jpg",
    //chma a funçao e define o tempo em ms
    "automatico" : () => intervalId = setInterval(troca_cor_aut, 1000)
}
buttons.addEventListener("click", troca_cor);

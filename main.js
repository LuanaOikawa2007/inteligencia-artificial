const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "racismo e de algo historico ou cultural?",
        alternativas: [
            "anos de preconceito com as pessoas por conta da sua pele ou raça.",
            "foi definido que uma cultura e melhor q a outro."
        ]
    },
    {
        enunciado: "qual e o papel da educaçao na luta contra o racismo?",
        alternativas: [
            "a educação e fundamental para conscientizar as pessoas sobre as consequencias do racismo.",
            "não e importante,pois a obrigacão das escolas e ensinar apenas a grade curricular."
        ]
    },
    {
        enunciado: "como o racismo se manifesta no dia a dia?",
        alternativas: [
            "o racismo pode se manifestar atraves de comentarios ofensivos,brincadeiras,microagressoes,dificuldade de acesso a empregos,saude e a educação.",
            "o racismo não se manifesta no dia a dia."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
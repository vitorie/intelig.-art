const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como é o processo da fabricação da cachaça no Brasil?",
        alternativas: [
            "Temos que corta a cana em baixo, proximo a raiz,a ponta devemos coloca em um forno contando para que ela fique para fora do fogo e o caldo que sair e a cachaça pura",
            "A cana deve ser cortada do meio para cima para ser bem aproveitada, apos isso a espremos e colocamos alcool no szuco da cana"
        ]
    },
    {
        enunciado: "Como é feito um destilado?",
        alternativas: [
            "Começamos pela fermentação como qualquer outra bebida alcoolica, apos isso é usados fungos, leveduras e bacterias que viram a produzir o alcool na subistancia porem para uma bebida ser realmente destilada é preciso ser fervida a maior quantidade de alcool",
            "Começamos pela fermentação e fervura de extratos e adição de alcool,apos isso as substancias se misturam e viram a bebida destilada"
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];

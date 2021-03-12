let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 -  vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.verde');
const yellow = document.querySelector('.amarelo');

//cria ordem aleatória 
let shuffleOrder = () => 
{
    let colorOrder = Math.floor(Math.random() +4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) 
    {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number (i) + 1 );
    }
}
//acende a próxima cor
let lightColor = (element, number) => 
{
    number = number * 500;
    setTimeout(() => 
    {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => 
    {
        element.classList.remove('selected');
    });
}
//checa se os botões clicados são os corretos.
let checkOrder = () =>
 {
    for (let i in clickedOrder) 
    {
        if(clickedOrder[I] != ORDER [I]) 
        {
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length) 
    {
        alert('Pontuação: ${score}\nVocê acertou! Carregando Próximo Nível, Boa sorte, Irá precisar!');
        nextLevel();

    }
}

//função para o clique do usuario
let click = (color) => 
{
    clickedOrder[clickedOrder.length] = color;
    elementColor(color).classList.add('selected');

    setTimeout(() => {
        elementColor(color).classList.remove('selected');
    })

    ckecOrder();
}

//função que retorna a cor
let createColorElement = (color) => 
{
    if(color == 0) 
    {
        return green;
    }
    else if(color ==1) 
    {
        return red 
    }
    else if (color == 2)
    {
        return yellow
    }
    else if (color ==3) 
    {
        return blue;
    }
}

//função para o próximo nivel
let nextLevel = () => 
{
    score++;
    shuffleOrder();
}

//função para o game over D:
let gameOver = () => 
{
    alert('Pontuação: ${score}!\nVocê perdeu o jogo, boa sorte na próxima vez!\nClique em OK para perder novamente !');
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => 
{
    alert('Bem vindo ao Gênesis! Pronto para perder ? \n Iniciando novo jogo !')
    score = 0;

    nextLevel();
}

green.onclick=() => (0);
red.onclick=() => (1);
yellow.onclick=() => (2);
blue.onclick=() => (3);

playGame();
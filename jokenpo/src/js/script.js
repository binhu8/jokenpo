let rock = document.querySelector('.item1');
let paper = document.querySelector('.item2');
let cut = document.querySelector('.item3');

let displayChoose = document.querySelector('.choose');
let displayPlay = document.querySelector('.play');

let itemSelect = document.querySelector('.itemSelect');
let itemSelectCup = document.querySelector('.itemSelectCup');
let youChoose = document.querySelector('.youChoose');
let computerChoose = document.querySelector('.computerChoose');

var resultado;
var cor = ["#fcb900", "#fc0000", "#298bc4" ]

let pontos = document.querySelector('.points')
let pontuacao = 0

let mensagem = document.querySelector('#resposta')
let msg = document.querySelector('.msgWin')

let restart = document.querySelector('.btnRestart')


restart.addEventListener('click',()=>{
    itemSelectCup.classList.remove('active')
    computerChoose.classList.remove('active') 
    itemSelect.classList.remove('active')
    youChoose.classList.remove('active') 
    msg.style.opacity = "0" 
    restart.style.opacity = "0" 

    displayPlay.style.display = "none"
    displayChoose.style.display = "flex" 

})

rock.addEventListener('click',()=>{
    displayChoose.style.display = "none"
    displayPlay.style.display = "flex"
    itemSelect.style.backgroundImage = "url(./src/image/icon-rock.svg)"
    
    setTimeout(function(){
        itemSelect.classList.add('active')
        youChoose.classList.add('active')

    },200)
    resultado = 0
    getRandomInt()

   
})

paper.addEventListener('click',()=>{

    displayChoose.style.display = "none"
    displayPlay.style.display = "flex"
    itemSelect.style.backgroundImage = "url(./src/image/icon-paper.svg)"

    setTimeout(function(){
        itemSelect.classList.add('active')
        youChoose.classList.add('active')
       
    },200)
    resultado = 1
    getRandomInt()


})

cut.addEventListener('click',()=>{
    displayChoose.style.display = "none"
    displayPlay.style.display = "flex"
    itemSelect.style.backgroundImage = "url(./src/image/icon-scissors.svg)"

    setTimeout(function(){
        itemSelect.classList.add('active')
        youChoose.classList.add('active')

    },200)
    resultado = 2
    getRandomInt()

})



// logica de valor aleatorio cup 

let imagens = ["url(./src/image/icon-rock.svg)", 
                "url(./src/image/icon-paper.svg)", 
                "url(./src/image/icon-scissors.svg)" ];

function getRandomInt(min=0, max=3) {
    return cupPlay(Math.floor(Math.random() * (max - min)) + min);
  }


function cupPlay(number){

   

    itemSelectCup.style.backgroundImage = imagens[number]
    setTimeout(function(){
        itemSelectCup.classList.add('active')
        computerChoose.classList.add('active')
        
    },200)

    setTimeout(function(){
        msg.style.opacity = "1" 
        setTimeout(function(){
            restart.style.opacity = "1" 
                   
        },400)
    },500)
    

    if(imagens[number] == imagens[resultado]){
        mensagem.innerHTML = "EMPATE"
        computerChoose.style.backgroundColor = "#9a9a9a"
        youChoose.style.backgroundColor = "#9a9a9a"

    }else if(resultado == 0 & number == 2 || resultado == 1 & number == 0 || resultado == 2 & number == 1){
        pontuacao ++
        pontos.innerHTML = pontuacao
        mensagem.innerHTML = "VOCÊ VENCEU"
        computerChoose.style.backgroundColor = ""
        computerChoose.style.backgroundColor = "#9a9a9a"
        youChoose.style.backgroundColor = cor[resultado]
    }else{
        mensagem.innerHTML = "VOCÊ PERDEU"
        youChoose.style.backgroundColor = "#9a9a9a"
        computerChoose.style.backgroundColor = cor[number]
        
    }
}


'use strict'
var widthBall1 = 100
var heightBall1 = 100

function onBallClick(elm){
    const randomNumber = getRandomInt(20, 61)

    const elmP = document.querySelector('.ball p')
    if(widthBall1 >= 400){
        widthBall1 = randomNumber
        heightBall1 = randomNumber
    }
    if(widthBall1 < 400){
    widthBall1 += randomNumber
    heightBall1 += randomNumber
    elm.style.width = widthBall1 + 'px'
    elm.style.height = heightBall1 +'px'
    elmP.innerText = `width : ${elm.style.width} height: ${elm.style.height}`
    }
}


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
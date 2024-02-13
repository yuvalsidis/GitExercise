'use strict'
var widthBall1 = 100
var heightBall1 = 100

function onBallClick(elm){
    const elmP = document.querySelector('.ball p')
    if(widthBall1 === 400){
        widthBall1 = 50
        heightBall1 = 50
    }
    if(widthBall1 < 400){
    widthBall1 += 50
    heightBall1 += 50
    elm.style.width = widthBall1 + 'px'
    elm.style.height = heightBall1 +'px'
    elmP.innerText = `width : ${elm.style.width} height: ${elm.style.height}`
    }
}
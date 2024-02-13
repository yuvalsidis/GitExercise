'use strict'
var widthBall1 = 100
var heightBall1 = 100

function onBallClick(elm){
    const randomNumber = getRandomInt(20, 61)
    const randomColor = getRandomColor()

    elm.style.backgroundColor = randomColor
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

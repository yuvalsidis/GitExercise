'use strict'


function onBallClick(elm){
    var elmWidth = +elm.style.width.replace('px','') 
    var elmHeight = +elm.style.height.replace('px','') 
    var elmId = elm.id
    console.log(elmWidth)
    console.log(elmHeight)

    const randomNumber = getRandomInt(20, 61)
    const randomColor = getRandomColor()

    elm.style.backgroundColor = randomColor
    const elmP = document.querySelector(`.${elmId} p`)
    if(elmWidth >= 400){
        elmWidth = randomNumber + 100
        elmHeight = randomNumber + 100
    }
    else if(elmWidth < 400){
    elmWidth += randomNumber 
    elmHeight += randomNumber
    }
    elm.style.width = elmWidth + 'px'
    elm.style.height = elmHeight +'px'
    elmP.innerText = `Width : ${elm.style.width} height: ${elm.style.height}`
}

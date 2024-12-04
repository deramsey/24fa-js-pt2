var colorEase = 0;

function easyColor(){
    if(colorEase < 360){
        document.body.style.backgroundColor = `hsl(${colorEase}, 70%, 50%)`;
        colorEase++;
    }
    else{
        colorEase = 0;
    }
}

function changeColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function changeSquares(){
    let allSquares = document.querySelectorAll("section");
    for(let square of allSquares){
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
    }
}

setInterval(changeSquares, 3000);
setInterval(easyColor, 50);
let largo = 6; 
let cuadros = document.querySelectorAll('.square');
let colors = generateRandomColors(largo);
let message = document.querySelector("#message")
let resetBtn = document.querySelector("#reset");
let ElH1 = document.querySelector("#ElH1");
let hardBtn = document.querySelector("#hardButton");
let easyBtn = document.querySelector("#easyButton");

let titulo = document.querySelector("#colorDisplay"); 
let pickedColor = pickColor(); 
titulo.textContent = pickedColor; 

for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].style.backgroundColor = colors[i];
    cuadros[i].addEventListener('click', function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "Correcto!"
            resetBtn.textContent = "Jugar de nuevo?"
            changeColors(clickedColor)
            ElH1.style.backgroundColor = clickedColor
          } else {
            this.style.backgroundColor = "#2C2F33"
            message.textContent = "Volve a intentar!"
          }
    });
} 

resetBtn.addEventListener("click", function() {
    reset();
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    largo = 6
    reset();
});

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    largo = 3
    reset();
});



for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].style.backgroundColor = colors[i];

    cuadros[i].addEventListener('click', function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "Correcto!"
            message.style.backgroundColor = "#1db954";
            reset.textContent = "Jugar de nuevo!"
            changeColors(clickedColor)
            ElH1.style.backgroundColor = clickedColor
          } else {
            this.style.backgroundColor = "#2C2F33"
            message.textContent = "Volve a intentar!"
            message.style.backgroundColor = "red";
          }
    });
}



function changeColors(color) {
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].style.backgroundColor = color;
    }
}
function pickColor () {
    let pickedColor = colors[getRandomInt(largo)]
    return pickedColor;
}

function randomColor () {
    let red = getRandomInt(256); 
    let green = getRandomInt(256); 
    let blue = getRandomInt(256);
    return `rgb(${red}, ${green}, ${blue})`
}

function generateRandomColors(largo) {
        let arr = [];
        for (let i = 0; i < largo; i++) {
            arr[i] = randomColor()
            }
    return arr
}

function reset() {
    colors = generateRandomColors(largo); 
    pickedColor = pickColor(); 
    titulo.textContent = pickedColor;
    resetBtn.textContent = "Nuevos Colores";
    message.textContent = "";
    ElH1.style.backgroundColor = "#2C2F33";
    message.style.backgroundColor = "";
    
    for (let i = 0; i < cuadros.length; i++) {
        if (colors[i]) {
            cuadros[i].style.backgroundColor = colors[i]
            cuadros[i].style.display = "";
        } else {
            cuadros[i].style.display = "none";
        }
        
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
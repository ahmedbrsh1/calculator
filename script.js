let screen = document.getElementsByClassName("screen")[0];
let storageScreen = document.getElementsByClassName("storage-screen")[0];
let numbers = document.getElementsByClassName("button number");
let operations = document.getElementsByClassName("operation");
let calculateBtn = document.getElementsByClassName("calculate")[0];
let clearBtn = document.getElementsByClassName("clear")[0];
let firstNumber = "";
let currentOperation = "";
let secondNumber = "";

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click",function () {
        screen.innerHTML += numbers[i].innerHTML;
    })
    
}

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click",function () {
        if(screen.innerHTML != ""){            
            currentOperation = operations[i].innerHTML;
            firstNumber = screen.innerHTML;
            storageScreen.innerHTML = screen.innerHTML;
            screen.innerHTML = "";
            
        }


    })
    
    
}

calculateBtn.addEventListener("click",function () {

    if (screen.innerHTML != ""){
        secondNumber = screen.innerHTML;
        storageScreen.innerHTML = "";

        if (currentOperation == "+") {
            screen.innerHTML = +firstNumber + +secondNumber;
        }
        if (currentOperation == "-") {
            screen.innerHTML = +firstNumber - +secondNumber;
        }
        if (currentOperation == "x") {
            screen.innerHTML = +firstNumber * +secondNumber;
        }
        if (currentOperation == "/") {
            screen.innerHTML = +firstNumber / +secondNumber;
        }
    }

})

clearBtn.addEventListener("click",function () {
    screen.innerHTML = "";
    storageScreen.innerHTML = "";
    firstNumber = "";
    secondNumber = "";
})


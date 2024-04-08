let start = document.querySelector(".start");
let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let timer = document.querySelector(".timer");
let question = document.querySelector(".question");
let result = document.querySelector(".result");
let timeStarted = false;
let operator;
let random;
let num1;
let num2;
let answer;
let intervalId;
let score = document.querySelector(".score").innerHTML = 0;
let firstInstruc = document.querySelector("#firstInstruc");
let secondInstruc = document.querySelector("#secondInstruc");
let thirdInstruc = document.querySelector("#thirdInstruc");
let digits = document.querySelectorAll(".digit");
let operatorButtons = document.querySelectorAll(".operatorButton");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let all = document.querySelector("#all");
let operationUse = document.querySelector(".operationUse");
let digitUse = document.querySelector(".digitUse");
let timeUse = document.querySelector(".timeUse");
let category = document.querySelector(".category");
let reload = document.querySelector(".reload");
let inputTime = document.querySelector(".inputTime");
let enterTime = document.querySelector(".enterTime");
let digit1_Click = false;
let digit2_Click = false;
let digit3_Click = false;
let digit4_Click = false;
let scoring = document.querySelector(".scoring");
let addClick = false;
let subtractClick = false;
let multiplyClick = false;
let divideClick = false;
let allClick = false;
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");
let decimalInstruc = document.querySelector("#decimalInstruc");
let withDecimal = document.querySelector(".withDecimal");
let haveDecimal = false;
let intro = document.querySelector("#intro");

function refresh(){
    location.reload();
}

function addFunc(){ addClick = true; OperationFunc(); }
function subtractdFunc(){ subtractClick = true; OperationFunc(); }
function multiplyFunc(){ multiplyClick = true; OperationFunc(); }
function divideFunc(){ divideClick = true; OperationFunc(); }
function allFunc(){ allClick = true; OperationFunc(); }

function OperationFunc(){
    firstInstruc.style.display = "none";
    
    operatorButtons.forEach(operatorButton => {
        operatorButton.style.display = "none";
    })
    
    category.style.display = "block";
    secondInstruc.style.display = "block";
    digits.forEach(digit => {
        digit.style.display = "block";
    })
    if(addClick == true){ operationUse.innerHTML = "Addition"; operator = "+"; }
    if(subtractClick == true){ operationUse.innerHTML = "Subtraction"; operator = "-"; }
    if(multiplyClick == true){ operationUse.innerHTML = "Multiplication"; operator = "x"; }
    if(divideClick == true){ operationUse.innerHTML = "Division"; operator = "/"; }
    if(allClick == true){ operationUse.innerHTML = "All"; operator = randomSign(); }
}

function digit1(){ digit1_Click = true; digitFunc(); }
function digit2(){ digit2_Click = true; digitFunc(); }
function digit3(){ digit3_Click = true; digitFunc(); }
function digit4(){ digit4_Click = true; digitFunc(); }

function digitFunc(){
    secondInstruc.style.display = "none";
    digits.forEach(digit => {
    digit.style.display = "none";
    })
    thirdInstruc.style.display = "block";
    inputTime.style.display = "block";
    inputTime.focus();
    enterTime.style.display = "block";
    if(digit1_Click == true){ digitUse.innerHTML = "1"; }
    if(digit2_Click == true){ digitUse.innerHTML = "2"; }
    if(digit3_Click == true){ digitUse.innerHTML = "3"; }
    if(digit4_Click == true){ digitUse.innerHTML = "4"; }
}

function enteredTime(){
    if(inputTime.value !== ""){
        thirdInstruc.style.display = "none";
        inputTime.style.display = "none";
        enterTime.style.display = "none";
        timeUse.innerHTML = parseInt(inputTime.value);
        start.style.display = "block";
        if(operator == "/" || allClick == true){
            decimalInstruc.style.display = "block";
            yes.style.display = "block";
            no.style.display = "block";
            start.style.display = "none";
        }

    }
}

function yesDecimal(){ 
    decimalInstruc.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    withDecimal.innerHTML = "With decimal: Yes"; 
    start.style.display = "block"; 
    haveDecimal = true; 
}
function noDecimal(){ 
    decimalInstruc.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    withDecimal.innerHTML = "With decimal: No"; 
    haveDecimal = false;
    start.style.display = "block"; 
}

function randomSign(){
    random = Math.floor(Math.random() * 4) + 1;
    switch(random){
        case 1: operator = "+"; break;
        case 2: operator = "-"; break;
        case 3: operator = "x"; break;
        case 4: operator = "/"; break;
    }
    return operator;
}

function randomNum1(){
    if(digit1_Click == true){ return num1 = Math.floor(Math.random() * 9) + 1; }
    if(digit2_Click == true){ return num1 = Math.floor(Math.random() * 99) + 1; }
    if(digit3_Click == true){ return num1 = Math.floor(Math.random() * 999) + 1; }
    if(digit4_Click == true){ return num1 = Math.floor(Math.random() * 9999) + 1; }
}
function randomNum2(){
    if(digit1_Click == true){ return num2 = Math.floor(Math.random() * 9) + 1; }
    if(digit2_Click == true){ return num2 = Math.floor(Math.random() * 99) + 1; }
    if(digit3_Click == true){ return num2 = Math.floor(Math.random() * 999) + 1; }
    if(digit4_Click == true){ return num2 = Math.floor(Math.random() * 9999) + 1; }
}

function checkAnswer(){
    let correctAnswer;
    if (operator === "+") { correctAnswer = num1 + num2; }
    if (operator === "-") { correctAnswer = num1 - num2; } 
    if (operator === "x") { correctAnswer = num1 * num2; }  
    if (operator === "/") { 
        if(haveDecimal == true){ correctAnswer = correctAnswer = num1 / num2 }
        else correctAnswer = Math.floor(num1 / num2);  
    }
    let isCorrect = correctAnswer === answer;

    if(isCorrect){
        clearInterval(intervalId);
        startGame();
        input.value = '';
        input.focus();
        score++;
        document.querySelector(".score").innerHTML = score;
        randomNum1();
        randomNum2();
        question.innerHTML = num1 + " " + operator + " " + num2;
        randomText = Math.floor(Math.random() * 5);
        switch(randomText){
            case 0: result.innerHTML = "TALINO POTA!"; break;
            case 1: result.innerHTML = "GALING GAGO!"; break;
            case 2: result.innerHTML = "PWEDE NA"; break;
            case 3: result.innerHTML = "CHEATER YATA"; break;
            case 4: result.innerHTML = "LUPET AMPUCHA!"; break;
        }
        result.style.display = "block";
        timer.style.display = "none";
        setTimeout(function(){
            result.style.display = "none";
            timer.style.display = "block";
        }, 1500);
        
    } 
    else{
        clearInterval(intervalId);
        if(score == 1 || score == 0) result.innerHTML = "BOBO <br>" + score + " point";
                else result.innerHTML = "BOBO <br>" + score + " points";
        result.style.display = "block";
        score = 0;
        document.querySelector(".score").innerHTML = score;
        timer.style.display = "none";
        input.style.display = "none";
        input.value = '';
        submit.style.display = "none";
        question.style.display = "none";
        start.style.display = "block";
        timeStarted = false;
    } 
}

submit.addEventListener("click" , function(){
    if(input.value !== ""){
        answer = parseInt(input.value);
        checkAnswer();
    }
})

start.onclick = function(){
    timeStarted = true;
    startGame();
    randomNum1();
    randomNum2();
    start.style.display = "none";
    result.style.display = "none";
    input.style.display = "block";
    input.focus();
    submit.style.display = "block";
    timer.style.display = "block";
    question.innerHTML = num1 + " " + operator + " " + num2;
    question.style.display = "block";
    scoring.style.display = "block";
};

function startGame(){
    if(timeStarted == true){
        let time = parseInt(inputTime.value);
        intervalId = setInterval(function(){
            timer.innerHTML = time--;
            if(time < 0){
                clearInterval(intervalId);
                timer.style.display = "none";
                input.style.display = "none";
                input.value = '';
                submit.style.display = "none";
                question.style.display = "none";
                start.style.display = "block";
                if(score == 1 || score == 0) result.innerHTML = "TIME'S UP<br>" + score + " point";
                else result.innerHTML = "TIME'S UP<br>" + score + " points";
                result.style.display = "block";
                score = 0;
                document.querySelector(".score").innerHTML = score;
                timeStarted = false;
            }
        }, 1000);
    }
}

window.addEventListener("keypress", ({key}) => {
    if (key == "Enter")
        if(timeStarted) submit.click();
});

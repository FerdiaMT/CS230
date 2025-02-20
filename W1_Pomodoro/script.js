var min = 25;
var second = 0;
var running = false;
var isZero = "";
var isZero2 = "";

var startTriggered = false;
var firstTimeClicked = false;

function start(){
    console.log(startTriggered);

    if(firstTimeClicked == false){
        setInterval(decreaseTime,1000);
        startTriggered = true;
        running = true;
        firstTimeClicked = true;
    }

    if(!running){
        running = true;
        startTriggered = true;
    }
}

function decreaseTime(){
    if(running ==true){

        second--;
        if(second < 0){
            min--;
            second = 59;
        }

        second<10 ? isZero = "0" :isZero = "";

        min<10 ? isZero2="0" : isZero2 = "";

        if(min<1){
            document.getElementById("timer").style.color = 'red';
            document.getElementById("timer").style.backgroundColor = 'yellow';
        }
        document.getElementById("timer").innerText = isZero2+""+min + ":" + isZero + "" + second;

        if(min<=0 && second <=0){
            alert("Hello");
            stop();
        }
    }
}

function pause(){
    running = !running;
    running ? 
        document.getElementById("pause").innerText= 'Pause' :
        document.getElementById("pause").innerText = 'Resume' ;
    console.log("Pause");
}

function stop(){

    running = false;
    startTriggered=false;
    document.getElementById("timer").style.color = 'white';
    document.getElementById("timer").style.background =" rgba(255, 255, 0, 0)";
    min = 25;
    second = 0;
    document.getElementById("timer").innerText = min + ":" + second + "0";
    console.log("Stop");
}


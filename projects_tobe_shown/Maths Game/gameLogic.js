// if start/reset button is clicked

var playing = false;
var score=0;
var answers = [];
var options =[];
var time=60;
var num1;
var num2;

document.getElementById("startreset").onclick = function(){
    if(playing == false){
        document.getElementById("startreset").innerHTML = "Reset Game";
        document.getElementById("timeRemaining").style.visibility ="visible";
        document.getElementById("time").innerHTML =60;
        document.getElementById("gameOver").style.visibility = "hidden";
        document.getElementById("scoreNo").innerHTML = 0;
        playing=true;
        score=0;
        answers =[];
        options=[];
        time=60;
        timer();
        loadQuestion();
    }else{
        window.location.reload();
        playing=false;
    }
}

document.getElementById("box1").onclick = function(){
    var h;
    if(playing==true && time>=0){
        if(document.getElementById("box1").innerHTML==(num1*num2)){
            document.getElementById("correct").style.visibility="visible";
            score+=1;
            setTimeout(function(){
                document.getElementById("correct").style.visibility="hidden";
            },400);
            answers =[];
            options=[];
            loadQuestion();
        }else{
            document.getElementById("wrong").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("wrong").style.visibility="hidden";
            },400);
        }
    }
    document.getElementById("scoreNo").innerHTML=score;
}

document.getElementById("box2").onclick = function(){
    var h;
    if(playing==true && time>=0){
        if(document.getElementById("box2").innerHTML==(num1*num2)){
            score+=1;
            document.getElementById("correct").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("correct").style.visibility="hidden";
            },400);
            answers =[];
            options=[];
            loadQuestion();
        }else{
            document.getElementById("wrong").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("wrong").style.visibility="hidden";
            },400);
        }
    }
    document.getElementById("scoreNo").innerHTML=score;
}

document.getElementById("box3").onclick = function(){
    var h;
    if(playing==true && time>=0){
        if(document.getElementById("box3").innerHTML==(num1*num2)){
            score+=1;
            document.getElementById("correct").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("correct").style.visibility="hidden";
            },400 );
            answers =[];
            options=[];
            loadQuestion();
        }else{
            document.getElementById("wrong").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("wrong").style.visibility="hidden";
            },400);
        }
    }
    document.getElementById("scoreNo").innerHTML=score;
}

document.getElementById("box4").onclick = function(){
    var h;
    if(playing==true && time>=0){
        if(document.getElementById("box4").innerHTML==(num1*num2)){
            score+=1;
            document.getElementById("correct").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("correct").style.visibility="hidden";
            },400);
            answers =[];
            options=[];
            loadQuestion();
        }else{
            document.getElementById("wrong").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("wrong").style.visibility="hidden";
            },400);
        }
    }
    document.getElementById("scoreNo").innerHTML=score;
}

function timer(){//make the timing decide game end
    var hello = setInterval(function(){
            if(time>0){
                document.getElementById("time").innerHTML = time=time-1;
            }else{
                document.getElementById("startreset").innerHTML = "Restart Game";
                document.getElementById("gameOver").style.visibility = "visible";
                document.getElementById("timeRemaining").style.visibility = "hidden";
                document.getElementById("score1").innerHTML=score;
                playing=false;
                clearInterval(hello);
            }
        },1000);
}

function loadQuestion(){
    num1 = Math.floor(11*Math.random());
    while(num1==0){
        num1=Math.floor(11*Math.random());
    }
    num2 = Math.floor(11*Math.random());
    while(num2==0){
        num2=Math.floor(11*Math.random());
    }
    document.getElementById("Question").innerHTML = num1 + "x" + num2;
    loadAnswers(num1*num2);
}

function loadAnswers(questionAnswer){
    var num = 0;
    var x;
    answers.push(questionAnswer);
    for(num=0; num<3; num++){
        x= Math.floor(11*Math.random())* Math.floor(11*Math.random());
        while(x==0){
            x= Math.floor(11*Math.random())* Math.floor(11*Math.random());
        }
        if(inArray(x)==false && x!=0){
            answers.push(x);
        }
        else{
            x= Math.floor(11*Math.random())* Math.floor(11*Math.random());
            while(inArray(x)==true || x==0){
                x= Math.floor(11*Math.random())* Math.floor(11*Math.random());
            }
            answers.push(x);
        }
    }
    printOptions();
}

function printOptions(){
    var array =[1,2,3,4];
    var num;
    while(options.length!=4){
        num=Math.floor(array.length*Math.random());
        if(inArray2(array[num])==false){
            options.push(array[num]);
        }
    }
    for(var i=0; i<4; i++){
        document.getElementById("box"+(i+1)).innerHTML = answers[options[i]-1];
    }
}

function inArray(x) {
    var num=0;
    if(answers.length == 0){
            return false;
    }else{
        for(var y=0; y<answers.length; y++){
            if(x == answers[y]){
                num++;
            }
        }
        if(num==0){
            return false;
        }else{
            return true;
        }
    }
}

function inArray2(x){
    var num=0;
    if(options.length == 0){
            return false;
        }else{
            for(var y=0; y<options.length; y++){
                if(x == options[y]){
                    num++;
                }
            }
            if(num==0){
                return false;
            }else{
                return true;
            }
        }
}
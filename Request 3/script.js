window.onload = function () {
    setInterval(showTime, 1000);
};

// var func = showTime();
// var run = setInterval("func",1000)

function showTime() {
    var today = new Date();
    var h = today.getHours();
    // console.log("h:" + h);
    var m = today.getMinutes();
    // console.log("m:" + m);
    var s = today.getSeconds();
    // console.log("s:" + s);

    var srcH1 = "00.gif";
    var srcH2 = "00.gif";
    if (h < 10) {
        srcH1 = "00.gif";
        srcH2 = "0" + h + ".gif";

    }
    else {

        srcH1 = "0" + (Math.floor(h / 10)) + ".gif";
        srcH2 = "0" + (h % 10) + ".gif";
    }

    document.getElementById("h1").src = srcH1
    document.getElementById("h2").src = srcH2


    var srcM1 = "00.gif";
    var srcM2 = "00.gif";
    if (m < 10) {
        srcM1 = "00.gif";
        srcM2 = "0" + m + ".gif";
    }
    else {
        srcM1 = "0" + (Math.floor(m / 10)) + ".gif";
        srcM2 = "0" + (m % 10) + ".gif";
    }
    document.getElementById("m1").src = srcM1
    document.getElementById("m2").src = srcM2

    var srcS1 = "00.gif";
    var srcS2 = "00.gif";
    if (s < 10) {
        srcS1 = "00.gif";
        srcS2 = "0" + s + ".gif";
    }
    else {
        srcS1 = "0" + (Math.floor(s / 10)) + ".gif";
        srcS2 = "0" + (s % 10) + ".gif";
    }
    document.getElementById("s1").src = srcS1
    document.getElementById("s2").src = srcS2


    if (h >= 0 && h < 12) {
        document.getElementById("m").style.display = "block";
        document.getElementById("a").style.display = "none";
        document.getElementById("e").style.display = "none";
        
    }
   

    if (h >= 12 && h < 17) {
        document.getElementById("a").style.display = "block";
        document.getElementById("m").style.display = "none";
        document.getElementById("e").style.display = "none";
    }

    if (h >= 17 && h <= 23) {
        document.getElementById("e").style.display = "block";
        document.getElementById("a").style.display = "none";
        document.getElementById("m").style.display = "none";
    }


}

// const colorChange = document.querySelector('.colorChange')
// const colors = ['red', 'green', 'blue' , 'black']
// var i = 0
// setInterval(function(){
//     if(i<colors.length){
//         i ++
//     colorChange.setAttribute('style', color: ${colors[i]} )
//     }else{
//         i = 0
//     }
// }, 1000);

const colorChange = document.querySelector('.colorChange')

var i=false;
setInterval(function(){ 
    i = !i
    if(i==true){
        colorChange.setAttribute('style', 'color: red ; font-size: 21px' )
    }
    else(
        colorChange.setAttribute('style', 'color: black; font-size: 18px' )
    )

},1000)



var questions = ["1 = 1?", "4%2 = 0?", "0! = 0?", "e^(i*Pi) = -1?"]
var answers = ["True", "True", "False", "True"]

var i = 0
var pts = 0

function init() {
    clock = 8
    
    $("#question").html(questions[0])
    $("#True").append("<button>True</button")
    $("#False").append("<button>False</button")
}

$(".choice").on("click", function(){
    console.log($(this).text())
    check($(this).text())
    i++
    $("#question").html(questions[i])
})

function restart() {
    clock = 8
    
    $("#question").html(questions[0])
}

function check(guess) {
    if (guess === answers[i]){
        pts++
        console.log(pts)
    }
    else {
        $("#answer").html("Incorrect")
        $("#answer").append("The correct answer was " + answers[i])
        setTimeout(clearAns, 850)
        moveOn()
    }
}

function moveOn() {
    if(i < questions.length){
        i++
        clock = 7
        $("#timer").html(clock)
        $("#question").html(questions[i])
    }
    else {
        $("#timer").html("")
    }
}

setInterval(function(){
    if(i < questions.length){
        clock--
        $("#timer").html(clock)
        if(clock === 0){
            $("#answer").html("Time's up!")
            $("#answer").append("The correct answer was " + answers[i])
            moveOn()
    }
    }
    else {
        $("#timer").html("")
        gameOver()
    }
}, 1000)

function clearAns(){
    $("#answer").html("")
}

function clear(){
    $("#question").html("")
    $("#answer").html("")
    $(".options").html("")
}

function gameOver(){
    $("#result").html("You got " + pts + " correct! <br>")
    $("#result").append("Restart? <br>")
    $("#result").append("<button id = 'retry'>Retry?</button>")
    $("#retry").on("click", function(){
        console.log("hit")
        i = 0
        clear()
        restart()
        $("#result").html("")
    })
}



init()
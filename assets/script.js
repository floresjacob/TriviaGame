var questions = ["1 = 1?", "4%2 = 0?", "0! = 0?", "e^(i*Pi) = -1?"]
var answers = ["True", "True", "False", "True"]

var i = 0
var pts = 0

function init() {
    clock = 8
    
    $("#question").html(questions[0])
    $("#True").append("True")
    $("#False").append("False")
}

$(".choice").on("click", function(){
    console.log($(this).text())
    check($(this).text())
    $("#question").html(questions[i])
})

function restart() {
    clock = 8
    
    $("#question").html(questions[0])
}

function check(guess) {
    if (guess === answers[i]){
        pts++
        console.log(i)
        moveOn()
    }
    else {
        $("#answer").html("Incorrect")
        $("#answer").append("The correct answer was " + answers[i])
        setTimeout(clearAns, 850)
        console.log(i)
        moveOn()
    }
}

function moveOn() {
    if(i < questions.length){
        i++
        console.log(i)
        clock = 7
        $("#timer").html("Shot Clock: " + clock)
        $("#question").html(questions[i])
    }
    else {
        $("#timer").html("")
    }
}

setInterval(function(){
    if(i < questions.length){
        clock--
        $("#timer").html("Shot Clock: " + clock)
        if(clock === 0){
            $("#answer").html("Time's up!")
            $("#answer").append("<br>The correct answer was " + answers[i])
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
    $("#result").html("<h1>You got " + pts + " correct!</h1> <br>")
    $("#result").append("<img id = 'gif' src='https://media.giphy.com/media/9lMoyThpKynde/giphy.gif'><br>")
    $("#result").append("<button class = 'btn btn-default' id = 'retry'>Retry?</button>")
    $("#retry").on("click", function(){
        console.log("hit")
        i = 0
        clear()
        restart()
        $("#result").html("")
    })
}



init()
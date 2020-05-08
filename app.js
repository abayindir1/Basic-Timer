$(document).ready(function(){
var audio = new Audio("raven.mp3")
    $(".btn").click(function(minutes){
        var duration = $("#timer-form").val()
        console.log(duration)
        if(duration <= 0){
            alert("Enter a bigger number")
        }else{
            minutes = duration -1
            seconds = 60
            setInterval(function() {
                seconds--
                if(seconds === 0){
                    minutes--
                    seconds = 60
                }else if(seconds === 0 && minutes ===0){
                    clearInterval()
                    minutes = 0
                    seconds = 0
                    audio.play()
                }
                console.log(minutes + ":" + seconds)
            },1000)
        }
    })
    
  });



$(document).ready(function(){
    var audio = new Audio("raven.mp3");
    $(".btn").click(function(duration){
        var duration = $("#timer-form").val()
        console.log(duration)
        $("#timer-form").val("");
        if(duration <= 0 || duration === null){
            alert("Enter a bigger number")
        }else{
            minutes = duration - 1
            seconds = 60
            console.log(minutes)
           var timer = setInterval(function() {
                seconds--
                if(seconds === -1){
                    minutes--
                    seconds = 60
                }else if(seconds === 0 && minutes ===0){
                    clearInterval(timer)
                    minutes = 0
                    seconds = 0
                    audio.play()
                }
                $("#timer").html(minutes + ":" + seconds)
            },1000)

        }
    })
    
  });



//Business Logic ::
function results(intValue){
    for(var i=1; i<=intValue; i++){
        if(((i % 3) === 0) && ((i % 5) === 0)){
            $('#result').append("<li class='pingpong'>" + "Entry: " + i + ", status: " + "pingpong</li>");
            pingPongCount+=1;
            $('#pingpongCount').text(pingPongCount);
        }
        else if((i % 5) === 0){
            $('#result').append("<li class='pong'>" + "Entry: " + i + ", status: " + "pong</li>");
            pongCount+=1;
            $('#pongCount').text(pongCount);
        }
        else if((i % 3)===0){
            $('#result').append("<li class='ping'>" + "Entry: " + i + ", status: " + "ping</li>");
            pingCount+=1;
            $('#pingCount').text(pingCount);
        }
        else{
            $('#result').append("<li>" + "Entry: " + i + ", status: " + "neither</li>");
            neitherCount+=1;
            $('#neither').text(neitherCount);
        }
    }
    i=i+1;
}

var pingCount = 0
    var pongCount = 0
    var pingPongCount = 0
    var neitherCount = 0
    var playerName;

$().ready(function(){
    $("#submitPlayerName").click(function(event){
        event.preventDefault();
        var avatarName=$("#userName").val();
        if(avatarName.length<4){
            alert("Oh! Make sure the your name has more than four characters, example 'mike' or 'mikey' :)");
            $("#userName").val("");
            event.preventDefault();
        }
        else{
            playerName=$("#userName").val();
            $("#sect2").hide(400);
            $("#sect3").show(1000);
            $('#playerAKA').text(playerName);
        }
    })

    $("#playPost").click(function(event){
        event.preventDefault();
        var intValue=parseInt($("#playerValue").val())
        $("#theGame").hide(400);
        results(intValue);
        $("#playerValue").val("");        
        $(".Retry").show(1000);
    });
    $("#Retry").click(function(event){
        event.preventDefault();
        $(".Retry").hide(400);
        $("#theGame").show(1000);       
    });
    $("#btn1").click(function(event){
        event.preventDefault();
        $("#sect1").hide(400);
        $("#sect2").show(1000);     
    });
})
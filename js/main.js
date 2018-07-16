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
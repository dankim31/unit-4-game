$(document).ready(function() {
//1. Generate random number //
    let targetNumber = Math.floor(Math.random()*101) + 19;
        $("#randomNumber").append(targetNumber);
        console.log(targetNumber);

//2. Generate random gem value //
    let gem1 = Math.floor(Math.random()*11) +1;
    let gem2 = Math.floor(Math.random()*11) +1;
    let gem3 = Math.floor(Math.random()*11) +1;
    let gem4 = Math.floor(Math.random()*11) +1;
    console.log(gem1);
    console.log(gem2);
    console.log(gem3);
    console.log(gem4);
 

//3. Set totals, wins, and losses //    
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#winsTotal').text("Wins: " + wins);
    $('#lossesTotal').text("Losses: " + losses);

//4. Set reset function //
// ISSUE: Random number keeps reseting and player total will not add up after first win or loss //
    function reset(){
        let targetNumber = Math.floor(Math.random()*101) + 19;
        $("#randomNumber").text(targetNumber);
        console.log(targetNumber);


        let gem1 = Math.floor(Math.random()*11) +1;
        let gem2 = Math.floor(Math.random()*11) +1;
        let gem3 = Math.floor(Math.random()*11) +1;
        let gem4 = Math.floor(Math.random()*11) +1;
        console.log(gem1);
        console.log(gem2);
        console.log(gem3);
        console.log(gem4);
        var playerTotal = 0;
        $("#totalNumber").text(playerTotal);
    }
//5. When you win //
    function gameWin(){
        wins++;
        $('#winsTotal').text("Wins: " + wins);
        reset();
    }
// 6. When you lose //
    function gameLose(){
        losses++;
        $('#lossesTotal').text("Losses: " + losses);
        reset();
    }
// 7. Click function for gems // 
    $("#gem1").on("click", function(){
        playerTotal = playerTotal + gem1;
        console.log(playerTotal);
        $('#totalNumber').text(playerTotal);
        if (playerTotal > targetNumber){
           gameLose();
        }
        else if(playerTotal === targetNumber){
            gameWin();
        }
    });

    $("#gem2").on("click", function(){
        playerTotal = playerTotal + gem2;
        console.log(playerTotal);
        $('#totalNumber').text(playerTotal);
        if (playerTotal > targetNumber){
            gameLose();
        }
        else if(playerTotal === targetNumber){
            gameWin();
        }       
    });

    $("#gem3").on("click", function(){
        playerTotal = playerTotal + gem3;
        console.log(playerTotal);
        $('#totalNumber').text(playerTotal);
        if (playerTotal > targetNumber){
            gameLose();
        }
        else if(playerTotal === targetNumber){
            gameWin();
        }        
    });

    $("#gem4").on("click", function(){
        playerTotal = playerTotal + gem4;
        console.log(playerTotal);
        $('#totalNumber').text(playerTotal);
        if (playerTotal > targetNumber){
            gameLose();
        }
        else if(playerTotal === targetNumber){
            gameWin();
        }
    });
})



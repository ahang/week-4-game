//Execute after DOM is ready
$(document).ready(function() {
    //Global variables
    var playerName;
    var playerHealth;
    var playerHealthTotal;
    var playerHealthText;
    var playerAtk;
    var enemyName;
    var enemyHealth;
    var enemyHealthTotal;
    var enemyHealthText
    var enemyAtk;
    var enemyCharacter;
    var selectedCharacter = false;
    var selectDefender = false;
    var count = 0;


    //set constructor charactersAttribute
    function Fighter (name, attack, hitpoints, pic) {
        this.name = name;
        this.attack = attack;
        this.hitpoints = hitpoints;
        this.pic = pic;
    }
    //setup the fighters in an object array
    var fighters = [
        new Fighter("Aang", 14, 180,'<img src="assets/images/Aang.png">'),
        new Fighter("Zuko", 15, 150, '<img src="assets/images/zuko.png">'),
        new Fighter("Katara", 12, 175, '<img src="assets/images/Katara.png">'),
        new Fighter("Toph", 10, 200, '<img src="assets/images/toph.png">')
    ];
    //console.log(fighter[1]);

//Set Global Variables for playerCharacter, enemyCharacter, win counter? lose counter?,
//Game Object for all characters
//Need to determine when the player select character it becomes theirs and then determine when
//the player is select the enemy to fight. .on("Click" function())
//Need to be have player select Attack and enemy to counterAttack for each attack
//What happens when enemy character gets defeated
//Reset Function! <restart button> <attack button> 5 rows
//

//Set up the start of the game
    function initializeGame() {
        //Iterates through the figheters object array and creates a data id for each of the indexes
        //appends the picture to the screen with the associated name/hp/attack value
        fighters.forEach (function (fighter, index) {
            var fighterButton = $("<div>");
            //adds the follow class and adds data index so that can be tracked
            fighterButton.addClass("btn charSelect text-center");
            fighterButton.data("fighterId", index);
            //append the picture to the fighterButton
            fighterButton.append(fighter.pic);

            var name = $("<h3>");
            name.text(fighter.name); //Apending Name
            fighterButton.append(name);

            var valueHP = $("<h4>");
            valueHP.text("HP: " + fighter.hitpoints + " / " + fighter.hitpoints); //Appending HP Value
            fighterButton.append(valueHP);

            var atkPower = $("<h5>");
            atkPower.text("Base AP: " + fighter.attack); //Appending Atk Power
            fighterButton.append(atkPower);
            //putting it all together!
            $(".selectCharacters").append(fighterButton);
        })

        $(".action-bar").html("Choose a character");
        selectCharacter();
        combat();
        $(".combat-log").text("");
        //console.log("Completed Initializing");
        reset();

    }

initializeGame();

//Have the user Selects the character
//Applies character to the selected character and applies enemy class to the unchosen character
//Bug - SelectedCharacter can still be selected to go to OpponentCharacter.. - need to fix
    function selectCharacter() {
        $(".charSelect").on("click", function() {
        //$(this).toggleClass("clicked"); //test to see if each char gets clicked
        //IF statement to check if the playerSelected the character.
            if (selectedCharacter === false) {
                $(".playerCharacter").html(this);
                $(this).addClass("player");
                $(this).removeClass("charSelect");
                //console.log("You have selected a character");
                selectedCharacter = true;
                $(this).prop("onclick", null).off("click"); //locks the char in place
                var fighterId = $(this).data("fighterId"); //set fighterId to pull the data index
                var player = fighters[fighterId]; //set the player to pull the fighters array information
                playerName = player.name; //fighter name
                playerHealth = player.hitpoints; //fighter hp
                playerHealthTotal = playerHealth;
                playerAtk = player.attack; //fighter attack
                //Checking~
                //console.log(playerAtk);
                //console.log(playerHealth);
                //console.log(playerName);
                $(".action-bar").html("Choose your opponent!");
            } //Checking to see if Defender has been selected yet
            //If defender has not allow player to select the defender and add opponent class and move it to the correct
            //div. Also update the actionbar text to show who the player selected and to proceed to the attacking phase!
            else if (selectDefender === false && selectedCharacter === true ) {
                $(".enemyCharacters").html(this);
                $(this).addClass("opponent");
                var opponentId = $(this).data("fighterId");
                var opponent = fighters[opponentId];
                enemyName = opponent.name;
                enemyHealth = opponent.hitpoints;
                enemyHealthTotal = enemyHealth;
                enemyAtk = opponent.attack;
                //console.log(enemyName);
                //console.log(enemyHealth);
                //console.log(enemyAtk);
                //console.log("You have selected an opponent");
                selectDefender = true;
                $(this).prop("onclick", null).off("click");
                $(".action-bar").html(playerName + " vs " + enemyName);
                $(".action-bar").append("<br> Click attack to fight your opponent");
            }
        });
    }

//This will allow the user to attack once the enemyCharacter is in the defender field
//Checks to make sure the character has been selected and the defender has been selected before
//allowing the user to hit the attack button
    function combat() {
        $(".attack").on("click", function() {
            //console.log("I am attacking");
            playerHealthText = $(".player").children("h4");
            enemyHealthText = $(".opponent").children("h4");

            if (!selectedCharacter) {
                $(".combat-log").html("Please select a character");
            } else if(!selectDefender) {
                $(".combat-log").html("Please select an opponent");
            } else if (selectedCharacter && selectDefender) {
                //Checks to see if Player and Enemy Health is greater than 0.
                //If it meets then allows player to attack
                    if (playerHealth > 0 && enemyHealth > 0) {
                        enemyHealth -= playerAtk;
                        enemyHealthText.text("HP: " + enemyHealth + ' / ' + enemyHealthTotal);
                        $(".combat-log").text(playerName + " deals " + playerAtk + " damage to " + enemyName + "." );
                        var randomNumber = Math.floor(Math.random() * 7); //random chance of gaining more attack each click
                        //This adds a random element to the RPG!!
                        playerAtk += randomNumber;
                        //console.log(randomNumber);
                    } //checks to see if enemyHealth is greater than 0 and playerHealth greater than 0.
                    //If it meets then allow enemy player to counterAttack
                    if (enemyHealth > 0 && playerHealth > 0) {
                        playerHealth -= enemyAtk;
                        playerHealthText.text("HP: " + playerHealth + " / " + playerHealthTotal);
                        $(".combat-log").append("<br>" + enemyName + " counters and attacks " + playerName + " dealing " + enemyAtk + " damage.");
                        //console.log(parseInt(playerAtk, 10));
                    } //checks to see if playerHealth is less then 0. If its 0 then game over!
                    if (playerHealth <= 0) {
                        playerHealthText.text(0 + " / " + playerHealthTotal);
                        $(".combat-log").html("<br> Game Over. Hit reset to try again!");
                    } //checks to see if enemyHealth is less than 0. If it is allow player to choose new character
                    if (enemyHealth <= 0 && count < 3) {
                        enemyHealthText.text(0 + " / " + playerHealthTotal);
                        $(".combat-log").append("<br> You defeated " + enemyName + "!");
                        $(".combat-log").append("<br> Select another opponent!");
                        count++;
                        //Check for winCondition
                        winCondition();
                    }
                }
    });
}

function winCondition() {
    if (count === 3) {
        $(".action-bar").empty("");
        $(".combat-log").html("<h1>You Win!! Congrats!!!");
    } else {
        selectDefender = false;
        selectCharacter();
    }
}

//resetting the game
    function reset() {
        $(".reset").on("click", function() {
            location.reload();
            // console.log("I am trying to reset");
            // selectedCharacter = false;
            // selectDefender = false;
            // count = 0;
            // $(".charSelect").remove();
            // $(".playerCharacter").empty();
            // $(".enemyCharacters").empty();
            // $(".combat-log").empty("");
            // initializeGame();
        })
    }

});


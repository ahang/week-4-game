//Execute after DOM is ready
$(document).ready(function() {
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
    var round = 0;

    // var playerChar;
    // var enemyCharacter;
    // var player1;
    // var player2;
    // var player3;
    // var player4;

    // var win = 0;
    // var lose = 0;

    //set constructor charactersAttribute
    var charactersAttr = function(name, attack, hitpoints, pic) {
        this.name = name;
        this.attack = attack;
        this.hitpoints = hitpoints;
        this.pic = pic;
    }
    //setup the fighters in an object array
    var fighter = [
        new charactersAttr("Aang", 20, 180,'<img src="assets/images/Aang.png">'),
        new charactersAttr("Zuko", 25, 150, '<img src="assets/images/Zuko.png">'),
        new charactersAttr("Katara", 18, 175, '<img src="assets/images/Katara.png">'),
        new charactersAttr("Toph", 17, 200, '<img src="assets/images/Toph.png">')
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
        //The Tons of Fun loop
        for (var i = 0; i < fighter.length; i++) {
            //Create a div for each available fighters
        console.log("This loop is starting");
            var selectDiv = $("<div>");
            selectDiv.addClass("btn charSelect text-center"); //add the btn class/charSelect for each character
            selectDiv.attr("name", fighter[i].name); //Add Name attr
            selectDiv.attr("hp", fighter[i].hitpoints); //Add Hp attr
            selectDiv.attr("attack", fighter[i].attack); //Add atk attribute
            selectDiv.append(fighter[i].pic); //Appends the picture
            console.log(fighter[i].name + " You are now a button");

            var name = $("<h3>");
            name.text(fighter[i].name); //Apending Name
            selectDiv.append(name);

            var valueHP = $("<h4>");
            valueHP.text("HP: " + fighter[i].hitpoints + " / " + fighter[i].hitpoints); //Appending HP Value
            selectDiv.append(valueHP);

            var atkPower = $("<h5>");
            atkPower.text("AP: " + fighter[i].attack); //Appending Atk Power
            selectDiv.append(atkPower);

            $(".selectCharacters").append(selectDiv); //appends a div inbetween the selectCharacters html div

            console.log("Appended character: " + fighter[i].name);
        }
        $(".action-bar").html("Choose a character");
        selectCharacter();
        combat();
        //reset(); ~~Needs Fixing Broken TODO
        console.log("Completed Initializing");
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
                $(".playerCharacter").append(this);
                $(this).addClass("player");
                console.log("You have selected a character");
                selectedCharacter = true;
                $(this).prop("onclick", null).off("click"); //locks the char in place
                playerName = $(this).attr("name");
                playerHealth = $(this).attr("hp");
                playerHealthTotal = playerHealth;
                playerAtk = $(this).attr("attack");
                $(".action-bar").html("Choose your opponent!");
            } //Checking to see if Defender has been selected yet
            else if (selectDefender === false && selectedCharacter === true ) {
                $(".enemyCharacters").append(this);
                $(this).addClass("opponent");
                enemyName = $(this).attr("name");
                enemyHealth = $(this).attr("hp");
                enemyHealthTotal = enemyHealth;
                enemyAtk = $(this).attr("attack")
                console.log("You have selected an opponent");
                selectDefender = true;
                $(this).prop("onclick", null).off("click");
                $(".action-bar").html("Click attack to fight your opponent");
            }
        });
    }

//This will allow the user to attack once the enemyCharacter is in the defender field
//Checks to make sure the character has been selected and the defender has been selected before
//allowing the user to hit the attack button
    function combat() {
        $(".attack").on("click", function() {
            console.log("I am attacking");
            playerHealthText = $(".player").children("h4");
            enemyHealthText = $(".opponent").children("h4");

            if (!selectedCharacter) {
                $(".combat-log").html("Please select a character");
            } else if(!selectDefender) {
                $(".combat-log").html("Please select an opponent");
            } else if (selectedCharacter && selectDefender) {
                //Checks to see if Player and Enemy Health is great than 0.
                //If it meets then allows player to attack
                if (playerHealth > 0 && enemyHealth > 0) {
                    enemyHealth -= playerAtk;
                    enemyHealthText.text(enemyHealth + ' / ' + enemyHealthTotal);
                    $(".combat-log").text(playerName + " deals " + playerAtk + " damage to " + enemyName + "." );
                } //checks to see if enemyHealth is greater than 0 and playerHealth greater than 0.
                //If it meets then allow enemy player to counterAttack
                if (enemyHealth > 0 && playerHealth > 0) {
                    playerHealth -= enemyAtk;
                    playerHealthText.text(playerHealth + " / " + playerHealthTotal);
                    $(".combat-log").append("<br>" + enemyName + " counters and attacks " + playerName + " dealing " + enemyAtk + " damage.");
                } if (playerHealth <= 0) {
                    playerHealth = 0;
                    $(".combat-log").append("<br> Game Over. Hit reset to try again!");
                } if (enemyHealth <= 0) {
                    enemyHealth = 0;
                    $(".opponent").empty();
                    $(".combat-log").append("<br> Select another opponent!");
                    selectDefender = false;
                    selectCharacter();
                }
            }
    });
}

                    // playerHealth -= enemyAtk;
                    // $(".combat-log").append("<br>" + enemyName + " counters and attacks " + playerName + " dealing " + enemyAtk + " damage.");
//resetting
    function reset() {
        $(".reset").on("click", function() {
            console.log("I am trying to reset");

        })
    }

});


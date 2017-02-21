//Execute after DOM is ready
$(document).ready(function() {
    var playerCharacter;
    var enemyCharacter;
    var selectedCharacter = false;
    var selectDefender = false;

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
        new charactersAttr("Aang", 20, 180, '<img src="assets/images/Aang.png">'),
        new charactersAttr("Zuko", 25, 150, '<img src="assets/images/Zuko.png">'),
        new charactersAttr("Katara", 18, 175, '<img src="assets/images/Katara.png">'),
        new charactersAttr("Toph", 17, 200, '<img src="assets/images/Toph.png">')
    ];
    // console.log(fighter[1]);

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
        playerCharacter;
        enemyCharacter;
        selectedCharacter = false;
        selectDefender = false;
        //loops through the available fighters and appends them onto the selectCharacter div
        for (var i = 0; i < fighter.length; i++) {
            console.log("This loop is starting");
            var selectDiv = $("<div>");
            selectDiv.addClass("btn charSelect text-center"); //add the btn class/charSelect for each character
            console.log(fighter[i].name + " You are now a button");
            selectDiv.html(fighter[i].pic + "<br>" + fighter[i].name + "<br>HP: " + fighter[i].hitpoints +
                "<br>Attack: " + fighter[i].attack);
            console.log(fighter[i].pic); //checking

            $(".selectCharacters").append(selectDiv); //appends a div inbetween the selectCharacters html div

            console.log("Appended character: " + fighter[i].name);
        }
        $(".action-bar").html("Choose a character");
        selectCharacter();
        attack();
        reset();
        console.log("Completed Initializing");

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
                $(".action-bar").html("Choose your opponent!");
            } //Checking to see if Defender has been selected yet
            else if (selectDefender === false && selectedCharacter === true ) {
                $(".enemyCharacters").append(this);
                $(this).addClass("opponent");
                console.log("You have selected an opponent");
                selectDefender = true;
                $(".action-bar").html("Click attack to fight your opponent");
            }
        });
    }

    function combatInfo() {


    }

//Have the user selects one of the enemy character
//This will move the character to the defender field
    function enemyCharacters() {

    }

//This will allow the user to attack once the enemyCharacter is in the defender field
//Checks to make sure the character has been selected and the defender has been selected before
//allowing the user to hit the attack button
    function attack() {
        $(".attack").on("click", function() {
            console.log("I am attacking");
            if (!selectedCharacter) {
                $(".combat-log").html("Please select a character");
            } else if(!selectDefender) {
                $(".combat-log").html("Please select an opponent");
            } else if (selectedCharacter && selectDefender) {
                $(".combat-log").html("I am attacking");
            }
        })

    }
//resetting
    function reset() {
        $(".reset").on("click", function() {
            console.log("I am trying to reset");
            initializeGame();
        })
    }

});


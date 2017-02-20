//Execute after DOM is ready
$(document).ready(function() {
    var playerCharacter;
    var enemyCharacter;
    var selectedCharacter = false;
    var selectedDefender = false;

    // var playerChar;
    // var enemyCharacter;
    // var player1;
    // var player2;
    // var player3;
    // var player4;

    // var win = 0;
    // var lose = 0;

    //set constructor charactersAttribute
    var charactersAttr = function(id, name, attack, hitpoints, pic) {
        this.id = id;
        this.name = name;
        this.attack = attack;
        this.hitpoints = hitpoints;
        this.pic = pic;
    }
    //setup the fighters in an object array
    var fighter = [
        new charactersAttr(1, "Aang", 50, 1000, '<img src="assets/images/Aang.png">'),
        new charactersAttr(2, "Zuko", 100, 100, '<img src="assets/images/Zuko.png">'),
        new charactersAttr(3, "Katara", 50, 1000, '<img src="assets/images/Katara.png">'),
        new charactersAttr(4, "Sokka", 50, 1000, '<img src="assets/images/Toph.png">')
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
        //loops through the available fighters and appends them onto the selectCharacter div
        //
        for (var i = 0; i < fighter.length; i++) {
            console.log("This loop is starting");
            var selectDiv = $("<div>");
            selectDiv.addClass("btn charSelect"); //add the btn class/charSelect for each character
            console.log(fighter[i].name + " You are now a button");
            selectDiv.html(fighter[i].pic);
            console.log(fighter[i].pic); //checking

            $(".selectCharacters").append(selectDiv); //appends a div inbetween the selectCharacters html div

            console.log("Appended character: " + fighter[i].name);
        }
        console.log("Completed Initializing");

    }

initializeGame();

$(".charSelect").on("click", function() {
    //$(this).toggleClass("clicked"); //test to see if each char gets clicked
    //IF statement to check if the playerSelected the character.
    if (!selectedCharacter) {
        playerCharacter = $(this).attr("div");
        $(".playerCharacter").append(this);
        $(this).addClass("player");
        console.log("You have selected a character");
        selectedCharacter = true;
    } //Checking to see if Defender has been selected yet
    else if (!selectedDefender && selectedCharacter !== playerCharacter) {
        enemyCharacter = $(this).attr("div");
        $(".enemyCharacters").append(this);
        console.log("You have selected an opponent");
        selectedDefender = true;
    }
    // var movePlayer = $("<div>");
    // movePlayer.addClass("playerChar");
    // movePlayer.removeClass("charSelect");
    // $(".playerCharacter").appendTo($(this));
    // $(".playerCharacter").append(movePlayer);
    // $(".charSelect").children().appendTo(".enemyCharacters");


});

//Have the user Selects the character
//Applies character to the selected character and applies enemy class to the unchosen character

    function selectCharacter() {

    }

//Have the user selects one of the enemy character
//This will move the character to the defender field
    function enemyCharacters() {

    }

//This will allow the user to attack once the enemyCharacter is in the defender field
    function attack() {

    }
//This will determine the counterAttack of the defender
    function defend() {

    }




});
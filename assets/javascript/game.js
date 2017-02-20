//Execute after DOM is ready
$(document).ready(function() {
    var playerCharacter;
    // var playerChar;
    // var enemyCharacter;
    // var player1;
    // var player2;
    // var player3;
    // var player4;

    // var win = 0;
    // var lose = 0;

    var charactersAttr = function(id, name, attack, hitpoints, pic) {
        this.id = id;
        this.name = name;
        this.attack = attack;
        this.hitpoints = hitpoints;
        this.pic = pic;
    }

    var fighter = [
        new charactersAttr(1, "Aang", 50, 1000, '<img src="assets/images/Aang.png">'),
        new charactersAttr(2, "Zuko", 100, 100, '<img src="assets/images/Korra.png">'),
        new charactersAttr(3, "Korra", 50, 1000, '<img src="assets/images/Aang.png">'),
        new charactersAttr(4, "Appa", 50, 1000, '<img src="assets/images/Korra.png">')
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
            selectDiv.addClass("btn charSelect"); //add the button class for each character
            console.log("You are now a button");
            selectDiv.html(fighter[i].pic);
            console.log(fighter[i].pic); //checking

            $(".selectCharacters").append(selectDiv); //appends a div inbetween the selectCharacters html div

            console.log("Appended character: " + fighter[i].name);
        }
        console.log("Completed Initializing");

    }

initializeGame();

$(".charSelect").on("click", function() {
    console.log(fighter[0].name + " I've been clicked");
    $(this).toggleClass("clicked");
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
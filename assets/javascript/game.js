//Execute after DOM is ready
$(document).ready(function() {
    var playerChar;
    var enemyCharacter;
    var player1;
    var player2;
    var player3;
    var player4;

    var win = 0;
    var lose = 0;

    player1 = {
        "name": "Woo",
        "pic": "assets/images/",
        "health": 5,
        "attack": 5,
    }
    player2 = {
        "name": "Yea",
        "pic": "assets/images/",
        "health": 10,
        "attack": 10,
    }
    player3 = {
        "name": "Someone",
        "pic": "assets/images/",
        "health": 10,
        "attack": 10,
    }
    player4 = {
        "name": "Agapor",
        "pic": "assets/images/",
        "health": 20,
        "attack": 21,
    }

console.log(player1);
console.log(player4.name);
console.log(player4.health);
console.log("Enemy attack is " + player4.attack);

//Set Global Variables for playerCharacter, enemyCharacter, win counter? lose counter?,
//Game Object for all characters
//Need to determine when the player select character it becomes theirs and then determine when
//the player is select the enemy to fight. .on("Click" function())
//Need to be have player select Attack and enemy to counterAttack for each attack
//What happens when enemy character gets defeated
//Reset Function! <restart button> <attack button> 5 rows
//

//Set up the start of the game
    function startGame() {

    }

//Have the user Selects the character
//Applies character to the selected character and applies enemy class to the unchosen character

    function selectCharacter() {
        $(".selectCharacters").on("click")
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




})
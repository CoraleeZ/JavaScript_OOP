var Eeyore = {character: "Eeyore"};
var Heffalumps = {character: "Heffalups"};
Eeyore.east = Heffalumps; 
Heffalumps.west = Eeyore;

var Kanga = {character: "Kanga"};
Kanga.north = Eeyore;
Kanga.south = Christopher;

var Christopher = {character: "Christopher"};
Christopher.west = Owl; 
Christopher.east = Rabbit; 
Christopher.south = Pooh; 
Christopher.north = Kanga;

var Pooh = {character: "Pooh"};
Pooh.north = Christopher;
Pooh.south = Tigger;
Pooh.west = Piglet; 
Pooh.east = Bees; 

var Tigger = {character: "Tigger"};
Tigger.north = Pooh; 

var Owl = {character: "Owl"};
Owl.east = Christopher;
Owl.south = Piglet; 

var Piglet = {character: "Piglet"};
Piglet.east = Pooh;
Piglet.north = Owl;

var Rabbit = {character: "Rabbit"};
Rabbit.west = Christopher;
Rabbit.east = Gopher; 
Rabbit.south = Bees; 

var Gopher = {character: "Gopher"};
Gopher.west = Rabbit; 

var Bees = {character: "Bees"};
Bees.north = Rabbit; 
Bees.west = Pooh; 


var player = {
    location : Tigger
}

function move(str){
    if (str == "north"){
        player.location = player.location.north;
        return "you are now at " + player.location.character + "'s" + " house";
    }
    if (str == "south"){
        player.location = player.location.south;
        return "you are now at " + player.location.character + "'s" + " house";
    }
    if (str == "east"){
        player.location = player.location.east;
        return "you are now at " + player.location.character + "'s" + " house";
    }
    if (str == "west"){
        player.location = player.location.west;
        return "you are now at " + player.location.character + "'s" + " house";
    }
    else 
        return "YOU CANNOT PASS!!!!! WHAT ARE YOU DOING GO BACK TO THE PATH!!!"; 
}

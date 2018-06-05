var Eeyore = {character: "Eeyore"};
var Heffalumps = {character: "Heffalups"};
var Kanga = {character: "Kanga"};
var Christopher = {character: "Christopher"};
var Pooh = {character: "Pooh"};
var Tigger = {character: "Tigger"};
var Owl = {character: "Owl"};
var Piglet = {character: "Piglet"};
var Rabbit = {character: "Rabbit"};
var Gopher = {character: "Gopher"};
var Bees = {character: "Bees"};

Kanga.north = Eeyore;
Kanga.south = Christopher;
Eeyore.east = Heffalumps; 
Heffalumps.west = Eeyore;
Christopher.west = Owl; 
Christopher.east = Rabbit; 
Christopher.south = Pooh; 
Christopher.north = Kanga;
Pooh.north = Christopher;
Pooh.south = Tigger;
Pooh.west = Piglet; 
Pooh.east = Bees; 
Piglet.east = Pooh;
Piglet.north = Owl;
Owl.east = Christopher;
Owl.south = Piglet; 
Tigger.north = Pooh; 
Rabbit.west = Christopher;
Rabbit.east = Gopher; 
Rabbit.south = Bees; 
Gopher.west = Rabbit; 
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

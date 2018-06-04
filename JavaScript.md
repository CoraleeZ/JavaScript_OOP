# Overview of Object Oriented Programming in JavaScript

Object oriented programming is used so that we can create models to represent what we have in the real world. For example, in the real world we have visitors to our website, whom we lovingly call 'users'. A user is a real flesh and blood living person, but in our program, we'll use an object to represent the user. Within the object, we may store any data we need to know about the user.

```javascript 
var user1 = {
    name: "Kermit",
    email: "kermit@sesame.org"
}
```
Nesting objects is an essential concept to master. We may store any data we like within an object, even another object! As we nest more and more objects, we may wonder how so much memory can be stored in one object. It's actually pretty interesting how the memory is allocated. The nested object gets its own separate place in memory. The outer object then points to that memory address. Examine the code below and visualize user1's friend as occupying a location in memory apart from where user1 is stored. Though it looks like we're storing the friend within user1, what we're really storing in user1 is just the address in memory where the friend object is stored.

```javascript
var user1 = {
    name: "Kermit",
    email: "kermit@sesame.org",
    friend: {
        name: "Miss Piggy",
        email: "piggy@sesame.org"
    }
}
```

As we create more and more user objects, we may want a shortcut to create user instances. You may remember using classes to do this in other languages, such as Python. JavaScript is not class-based, but we do have object constructors! Not surprisingly, object constructors are used to construct objects. They are functions that make new instances. Within the object constructor, we may define the basic blueprint that we would like our objects to follow by setting the attributes and methods each object should have.

We will discuss object constructors in more detail in the upcoming days. For now, think about this: Our code above says that Miss Piggy is Kermit's friend. How do we alter our code so that Kermit is also Miss Piggy's friend?

# Pointers

Imagine that we're building a game for children. They may wander the Hundred Acre Wood and interact with Winnie the Pooh and other characters. Let's draw a map of where the different characters live in the Hundred Acre Wood.

To program this map in JavaScript, we will need to create many objects to represent the different characters' homes and where they are in relation to each other. For each home, we will need to know:

Who lives there?
 Which homes are to the north, south, east, and west?
 Similar to the question we left you with in the Overview module, we will need to determine how to make two objects point to each other. For example, Winnie the Pooh's home is north of Tigger's home while Tigger's home is south of Winnie the Pooh's. Let's try to code that:

 ```javascript 
 var tigger = { character: "Tigger",   // Tigger lives here
              north: { character: "Winnie the Pooh", // To the north, we have the home object of Winnie the Pooh
                      south: { character: "Tigger", // To the south of Pooh, we have the home object of Tigger
                               north: { character: "Winnie the Pooh",  // To the north of Tigger, we have the home ofcopy
                                        ...                            // Winnie the Pooh...  uh oh! We're stuck!
```

Oh no! Do you see the problem? We ran into a circular situation! If we try to write our nested objects this way, we'll be stuck forever! Tigger has Winnie the Pooh to the north, who has Tigger to the south, who has Winnie the Pooh to the north, who has Tigger to the south... and so on forever! Instead, let's approach this problem in steps by first creating objects for our two characters and then adding more attributes in a controlled manner.

```javascript
var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
```

Remember that what we are doing here is creating pointers to locations in memory.
As we add more homes to the map, we could take advantage of the pointers that already exist. For example, maybe all we know is that Piglet's home is to the west of the home that is to the north of Tigger. That is enough to add Piglet's home to the map! 

```javascript
var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
                                    // Assign that object's west attribute to piglet
```

The diagram below shows that we create the Piglet home object in a new location in memory. Then we assign its east attribute to point to the same memory location as tigger's north attribute. Finally, we follow tigger's north attribute to a location in memory. There, we create the west attribute there to point to where our new Piglet object is stored in memory. Notice that our diagram showing the locations in memory doesn't look much like the map shown above. Our attributes "east", "north", "south", and "west" hold no special meaning to our computer. The visual representation of the map we make for ourselves is irrelevant to our computer and how it stores our information for us.
function bst(){
    this.root = null;

}

function node(val){
    this.value = val;
    this.left = null;
    this.right = null; 

}

var first = new bst();
first.root = new node(30);
first.root.right = new node(50); 

// Methods 

bst.prototype.insert = function(val){
    // if there is no root, create root with given value. Then return 
    // if there is a root, then create runner or current variable to travel the tree in memory. Point the runner at the root node. 
    // move the runner to left or right until we find a node with no child where our new value could go. 
}

class Dot {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
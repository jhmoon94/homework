class Turtle {// x and y refers to current location and xOfVector and yOfvector refers to vector 
    constructor(x, y) {
    this.x = x;//current location of exis of x
    this.y = y;//current location of exis of y
    if((x > 0 && y > 0) && x , y != Infinity ) {//prevent error of invalid inputs
        this.x = x;
        this.y = y;
    } else {
        throw new Error('Invalid input: Please enter positive integer');
    }

    this.array = [[this.x, this.y]];//Location history
    this.stuckedArray =[];//Stucked location before entering out of range 
    this.xOfVector = 1;//x element of vector
    this.yOfvector = 0;//y element of vector
    }
    forward(n) {// Forward upon where it heads, x direction or y direction by vector
        if (this.xOfVector != 0) {
            for ( let i = 0; i < n; i ++) {// x direction is toward rightside
            this.x += this.xOfVector 
            if (this.x < 0) {
                this.x = 0;
                this.stuckedArray.push([this.x, this.y]);//Store stucked location before entering out of range 
            }
            this.array.push([this.x, this.y]);// this is for location history
            }
        } else {
            for ( let i = 0; i < n; i ++) {
                this.y -= this.yOfvector // y direction is toward downside
                if (this.y < 0) {
                    this.y = 0;
                    this.stuckedArray.push([this.x, this.y]);//Store stucked location before entering out of range
                }
                this.array.push([this.x, this.y]);// this is for location history
                }
        }
        return this;
    }//The concept is from vector rotation : https://limnu.com/sketch-easy-90-degree-rotate-vectors/
    right() {
        [ this.xOfVector, this.yOfvector ] = [ this.yOfvector, -this.xOfVector ];//Rotates 90 degree to negative angle (clockwise)
        return this;
    }
    left() {
        [this.xOfVector, this.yOfvector ] = [ -this.yOfvector, this.xOfVector]; //Rotates 90 degree to positive angle (counter-clockwise)
        return this;
    }
    allPoints() {// Return location history
        return this.array;
    }
    print() {//First create background
        let xs = [];
        let ys = [];
        let background = [];// To find out width and height of background
        this.array.forEach ( value => {
            xs.push(value[0])
            ys.push(value[1])
        })
        let width = Math.max(...xs) + Math.abs(Math.min(...xs)) + 2;//2 means exis of y plus margin of very end of east
        let height = Math.max(...ys) + Math.abs(Math.min(...ys)) + 1; //1 means exis of x
        for ( let i = 0; i < height; i++) {//Height is the amount of inner arrays
            let tempArr = [];
            for (let j = 0; j < width; j++ ) {//Width is amount of elements in inner arrays
            tempArr.push('\uD83C\uDF3F');//Distribute background elements(sprout) to horizental length(length)
            }
        background.push(tempArr);//Distribute background elemts to vertical length(height)
        }

        this.array.forEach ( element => {// Change value of background elements that belongs to location history
            background[element[1]][element[0]] = '\uD83C\uDF37';//Replace sprout to flower if  it is belongs to location history
            this.stuckedArray.forEach ( stucked => {//As array is reference type, array's each elements need to be compared 
                if (stucked[0] == element[0] && stucked[1] == element[1]) 
                    background[element[1]][element[0]] = '\uD83C\uDFF0';//Castle as stucked sign: Change value of background elements that is belongs stucked location 
                
            })             
        })
        background[this.array[0][1]][this.array[0][0]] = '\uD83C\uDF08'//Change value of a background element that is first location
        background[this.array[this.array.length - 1][1]][this.array[this.array.length - 1][0]] = '\uD83E\uDDDA';//Change value of a background element that is final location
        for (let i = 0; i< background.length; i++) {
            background[i] = background[i].join(' ');//Two-dimensional array to single array
        }
        console.log(background.join('\n'))//Join array to single string and log it 
    }
} 

new Turtle(0, 4)// Drawing Codecore's C
    .left()
    .forward(116)// It attemps to goes out of range hundred of times and the where it stucked is replaced with stop sign

    .right()
    .right()//Rotate 180-degree
    .forward(4)
    .left()

    .forward(9)
    .right()

    .forward(6)
    .right()

    .forward(2)
    .right()

    .forward(3)
    .left()

    .forward(4)
    .left()
    
    .forward(12)
    .left()
    
    .forward(4)
    .left()

    .forward(5)
    .right()

    .forward(3)
    .right()

    .forward(6)
    .right()

    .forward(10)
    .right()

    .forward(5)
    .print();

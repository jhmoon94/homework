class Turtle {// x and y refers to current location and xDirection and yDirection refers to vector 
    constructor(x, y) {
    this.w = '\uD83C\uDF31'//Ground
    this.b = '\uD83C\uDF37'//path
    this.s = '\u26D4'//stopsign
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
    this.xDirection = 1;//x element of vector
    this.yDirection = 0;//y element of vector
    }
    forward(n) {// Forward upon where it heads, x direction or y direction
        if (this.xDirection != 0) {
            for ( let i = 0; i < n; i ++) {// x direction is toward rightside
            this.x += this.xDirection 
            if (this.x < 0) {
                this.x = 0;
                this.stuckedArray.push([this.x, this.y]);//Store stucked location before entering out of range 
            }
            this.array.push([this.x, this.y]);// this is for location history
            }
        } else {
            for ( let i = 0; i < n; i ++) {
                this.y -= this.yDirection // y direction is toward downside
                if (this.y < 0) {
                    this.y = 0;
                    this.stuckedArray.push([this.x, this.y]);//Store stucked location before entering out of range
                }
                this.array.push([this.x, this.y]);// this is for location history
                }
        }
        return this;
    }//The concept is from rotation vector : https://limnu.com/sketch-easy-90-degree-rotate-vectors/
    right() {
        [ this.xDirection, this.yDirection ] = [ this.yDirection, -this.xDirection ];//Rotates 90 degree in negative angle
        return this;
    }
    left() {
        [this.xDirection, this.yDirection ] = [ -this.yDirection, this.xDirection]; //Rotates 90 degree in positive angle
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
        let width = Math.max(...xs) + Math.abs(Math.min(...xs)) + 2;
        let height = Math.max(...ys) + Math.abs(Math.min(...ys)) + 1; 
        for ( let i = 0; i < height; i++) {
            let tempArr = [];
            for (let j = 0; j < width; j++ ) {
            tempArr.push(this.w);
            }
        background.push(tempArr);
        }

        this.array.forEach ( element => {// Change value of the path on background
            background[element[1]][element[0]] = this.b;
            this.stuckedArray.forEach ( stucked => {//As array is reference type, array's elements need to be compared by itself
                if (stucked[0] == element[0] && stucked[1] == element[1]) 
                    background[element[1]][element[0]] = this.s;
                
            })             
        })
        background[this.array[this.array.length - 1][1]][this.array[this.array.length - 1][0]] = '\uD83C\uDF1E';//Final location needs to be specified
        for (let i = 0; i< background.length; i++) {
            background[i] = background[i].join(' ');//Two-dimensional array to single array
        }
        console.log(background.join('\n'))//Log string as joined array
    }
} 

// new Turtle(-10, -116)// Drawing Codecore's C
//     .right()
//     .forward(16)// It attemps to goes out of range hundred of times
//     .print();
new Turtle(0, 16)// Drawing Codecore's C
    .left()
    .forward(116)// It attemps to goes out of range hundred of times

    .right()
    .right()//Rotate 180-degree
    .forward(4)
    .left()

    .forward(12)
    .right()

    .forward(7)
    .right()

    .forward(3)
    .right()

    .forward(4)
    .left()

    .forward(6)
    .left()
    
    .forward(12)
    .left()
    
    .forward(6)
    .left()

    .forward(4)
    .right()

    .forward(3)
    .right()

    .forward(7)
    .right()

    .forward(12)
    .right()

    .forward(5)
    .print()

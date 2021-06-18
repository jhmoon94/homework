

class Turtle {// x and y refers to current location and xDirection and yDirection refers to vector 
    constructor(x, y) {
    this.w = '\u26AA'
    this.b = '\u26AB'
    this.s = '\u26D4'
    this.x = x;
    this.y = y;
    this.xDirection = 1;
    this.yDirection = 0;
    this.array = [[x, y]];
    this.stuckedArray =[];//stucked location before entering out of range 
    }
    forward(n) {// Forward upon where it heads, x direction or y direction
        if (this.xDirection != 0) {
            for ( let i = 0; i < n; i ++) {// x direction is toward rightside
            this.x += this.xDirection 
            if (this.x < 0) {
                this.x = 0;
                this.stuckedArray.push([this.x, this.y]);
            }
            this.array.push([this.x, this.y]);// this is for footstamp
            }
        } else {
            for ( let i = 0; i < n; i ++) {
                this.y -= this.yDirection // y direction is toward downside
                if (this.y < 0) {
                    this.y = 0;
                    this.stuckedArray.push([this.x, this.y]);//push stucked location to stuckedArray
                }
                this.array.push([this.x, this.y]);
                }
        }
        return this;
    }//The concept is from rotation vector : https://limnu.com/sketch-easy-90-degree-rotate-vectors/
    right() {
        [ this.xDirection, this.yDirection ] = [ this.yDirection, -this.xDirection ];
        return this;
    }
    left() {
        [this.xDirection, this.yDirection ] = [ -this.yDirection, this.xDirection] 
        return this;
    }
    allPoints() {// Return footstamp
        return this.array;
    }
    print() {//First make background and change value of the path
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

        this.array.forEach ( element => {// Change value of the path of background
            background[element[1]][element[0]] = this.b;
            this.stuckedArray.forEach ( stucked => {//because array is reference type, array's elements need to be compared by itself
                if (stucked[0] == element[0] && stucked[1] == element[1]) 
                    background[element[1]][element[0]] = this.s;
                
            }) 
           
        })
        for (let i = 0; i< background.length; i++) {
               background[i] = background[i].join(' ');
        }
        console.log(background.join('\n'))
    }
} 


new Turtle(0, 16)// Drawing Codecore's C
    .forward(0)
    .left()
    
    .forward(116)// it attemps to goes out of range hundred of times
    .right()
    .right()
    .forward(4)
    .left()

    .forward(15)
    .right()

    .forward(7)
    .right()

    .forward(3)
    .right()

    .forward(4)
    .left()

    .forward(9)
    .left()
    
    .forward(20)
    .left()
    
    .forward(9)
    .left()

    .forward(4)
    .right()

    .forward(3)
    .right()

    .forward(7)
    .right()

    .forward(15)
    .right()

    .forward(13)
    .print()

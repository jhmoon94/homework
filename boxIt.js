// '\u250F' is ┏
// '\u2513' is ┓
// '\u2501' is ━
// '\u2517' is ┗
// '\u2501' is ━
// '\u251B' is ┛
// '\u2523' is ┣
// '\u252B' is ┫
// '\u2503' is ┃

let array = [];
for ( let i = 2; i < process.argv.length; i++ ) {
    array.push(process.argv[i])
};

let drawLine = function(n) {
    return '\u2501'.repeat(n);
};
let drawTopBorder = function(n) {
    return  '\u250F' + drawLine(n) + '\u2513' +'\n';
}
let drawMiddleBorder = function(n) {
    return '\u2523' + drawLine(n) + '\u252B' +'\n';
}
let drawBottomBorder = function(n) {
    return '\u2517' +drawLine(n) + '\u251B';
}
let drawBarsAround = function(str) {
    return '\u2503' + str + '\u2503' + '\n';
}
// console.log('\u2513')
// console.log(drawTopBorder(2));
let boxIt = function(arr) {
    let longest = 0;
    let lines = '';
    for (i=0; i<arr.length; i++){
        if (arr[i].length > longest){
          longest = arr[i].length;
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (i === 0) {
            lines = lines + drawBarsAround(arr[i])
        } else {
            lines = lines + drawMiddleBorder(longest) + drawBarsAround(arr[i])
        }
    }
    return drawTopBorder(longest) + lines + drawBottomBorder(longest)
}
console.log(boxIt(array));
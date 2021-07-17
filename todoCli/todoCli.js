const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Todo CLI! \n------------------- \n");

function todoCli() {
    let list = [];
    function menu() {
      //show questions
      rl.question("(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n",
        input => {
        //lower the case of input
          const loweredInput = input.toLowerCase();
          let allItems = list[parseInt(loweredInput.slice(1)) - 1];
          if (loweredInput === 'v') {
              if (list.length === 0) {
                  console.log('List is empty...');
              } else {
                  for(let i = 1; i <= list.length ; i++) {
                      console.log(`${i} ${list[i - 1]}`);
                  }
              }
              menu();
          } else if (loweredInput === 'n') {
              rl.question("What?\n", input  => {
                  list.push('[ ] ' + input );
                  menu();
              }); 
          } else if (loweredInput[0] == 'c') {
            let things = parseInt(loweredInput.slice(1)) 
              if (things > 0 && things <= list.length) {
                  if (allItems.includes(' ✔ ')) {
                      console.log(`${allItems.slice(4)} it has already been marked`);
                      menu();
                  } else {
                      list[parseInt(loweredInput.slice(1)) - 1]= allItems.replace(' ', ' ✔ ');
                      console.log(`Completed ${allItems.slice(4)}`);
                      menu();
                  } 
              }
              menu();
          } else if (loweredInput[0] == 'd') {
              if (parseInt(loweredInput.slice(1)) > 0 && parseInt(loweredInput.slice(1)) <= list.length) { 
                  list.splice(parseInt(loweredInput.slice(1)) - 1, 1);
                  console.log(`Deleted ${allItems.slice(4)}`);
              } 
              menu();
          } else if (loweredInput === 'q') {
              console.log("See you soon! 😄");
              rl.close();
          } else {
              menu();
          }
      });        
    }
    menu();
}

todoCli();
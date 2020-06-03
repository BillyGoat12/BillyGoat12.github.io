
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var str = "#";// created a str with the value #
  for(let i = 0; i < num; i++){// looping up till the num number
    console.log(str);// logging to the console str value
    str += "#";// adding # to the value of str
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  for(let i = start; i <= end; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log('fizzbuzz');
    }else if(i % 3 === 0){
      console.log('fizz');
    }else if (i % 5 === 0){
      console.log('buzz');
    }else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  let val = "";// created a empty string
  for(let i = 0; i <= num; i++){// looping from 0 to num
    if(i === num){// checking if i equal num
      val.concat("\n");// concat \n to val
    }else if(i % 2 === 0){// checking if i is a multipule of 2 
      let str = "";// creating a empty string
      for(let j = 0; j < num; j++){// looping through 0 till num
        if(j % 2 === 0){// checking if i is a multipule of 2
          str += " ";// adding space to str string
        } else{// default
          str += "#";// adding # to str string
        }
      }
      str += "\n";// adding \n which creates a new line to str
      val += str;// add str string to val string
    }else {// default
      let str = "";// creating a empty string
      for(let k = 0; k < num; k++){// looping through 0 till num
        if(k % 2 === 0){// checking if i is a multipule of 2
          str += "#";// adding # to str string
        }else {// default 
          str += " ";// adding space to str string
        }
      }
      str += "\n";// adding \n which creates a new line to str
      val += str;// add str string to val string
    }
  }
  console.log(val);// logging to the console val string
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

function matrix(input) {
  let num = Number(input);

  if (num && num < 20 && num >= 1) {    

    for (let m = 1; m <= input; m++) {
      let result = "";
      for (let n = 1; n <= input; n++) {
        result += m + n - 1;
      }
      console.log(result);
    }

  } else {
    console.log('Please enter a number between 1 and 20!');
  }
}

matrix(4);

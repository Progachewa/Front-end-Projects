function building(floors, apartments) {
  for (let i = floors; i > 0; i--) {
    let result = "";
    for (let e = 0; e < apartments; e++) {
      if (i === floors) {
        result += `L${i}${e} `;
      } else if (i % 2 === 0) {
        result += `O${i}${e} `;
      } else {
        result += `A${i}${e} `;
      }
    }
    console.log(result);
  }
}

building(6, 4);

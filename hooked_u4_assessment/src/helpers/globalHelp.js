/*
JOSEPH P. PASAOA
Global Helper Functions | YouTube Abbreviated | Unit 4 Assessment
*/


const processInput = (input, descriptionString) => {
  let output = {
    pass: false,
    payload: ""
  };
  // switch (descriptionString) {
  //   case "searchTxt":
      if (!input || !input.trim()) {
        output.payload = `Invalid ${descriptionString}. Please re-enter your query and try again.`;
      } else {
        output.pass = true;
        output.payload = input.trim();
      }
  //   break;
  //   default :
  //     console.log("You're not supposed to be here.");
  //   break;
  // }
  return output;
}


module.exports = {
  processInput
}

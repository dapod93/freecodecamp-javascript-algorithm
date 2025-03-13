const output = document.getElementById("output");

const convertToRoman = (num) => {
  const romanNumeral = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  return romanNumeral
    .map(([roman, value]) => {
      let count = Math.floor(num / value);
      num %= value;
      return new Array(count).fill(roman).join("");
    })
    .join("");
};

const validateInput = (str, int) => {
  let errMsg = "";

  if (!str || str.match(/[e.]/g)) {
    errMsg = "Please enter a valid number.";
  } else if (int < 1) {
    errMsg = "Please enter a number greater than or equal to 1.";
  } else if (int > 3999) {
    errMsg = "Please enter a number less than or equal to 3999.";
  } else {
    return true;
  }

  output.innerText = errMsg;
  output.classList.add("alert");

  return false;
};

document.getElementById("convert-btn").addEventListener("click", () => {
  const numStr = document.getElementById("number").value;
  const int = parseInt(numStr, 10);

  output.classList.remove("hidden");
  output.innerText = "";
  output.classList.remove("alert");

  if (validateInput(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
});

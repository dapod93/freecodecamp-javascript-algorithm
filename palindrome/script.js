document.getElementById("check-btn").addEventListener("click", function () {
  const textInput = document.getElementById("text-input").value.trim();
  if (textInput === "") {
    alert("Please input a value");
    return;
  }

  const normalizedText = textInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const result = document.getElementById("result");
  if (normalizedText === normalizedText.split("").reverse().join("")) {
    result.textContent = `${textInput} is a palindrome`;
  } else {
    result.textContent = `${textInput} is not a palindrome`;
  }
});

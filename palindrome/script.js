document.getElementById("check-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value.trim();

  if (inputText === "") {
    alert("Please input a value");
    return;
  }

  const normalizedText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const isPalindrome = normalizedText === normalizedText.split("").reverse().join("");

  const resultElement = document.getElementById("result");
  if (isPalindrome) {
    resultElement.textContent = `${inputText} is a palindrome`;
  } else {
    resultElement.textContent = `${inputText} is not a palindrome`;
  }
});

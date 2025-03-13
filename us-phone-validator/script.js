const resultsDiv = document.getElementById("results-div");

document.getElementById("check-btn").addEventListener("click", () => {
  const usPhoneRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

  const userInput = document.getElementById("user-input").value.trim();
  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  }

  resultsDiv.classList.remove("hidden");
  resultsDiv.innerText = "";
  resultsDiv.innerText = usPhoneRegex.test(userInput) ? `Valid US number: ${userInput}` : `Invalid US number: ${userInput}`;
});

document.getElementById("clear-btn").addEventListener("click", () => {
  resultsDiv.textContent = "";
  resultsDiv.classList.add("hidden");
});

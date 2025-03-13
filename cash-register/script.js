let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
const cash = document.getElementById("cash");
const displayChangeDue = document.getElementById("change-due");

const renderChangeDue = (msg) => {
  displayChangeDue.classList.remove("hidden");
  displayChangeDue.innerText = "";
  displayChangeDue.innerText = msg;
};

const clearDom = () => {
  cash.value = "";
  displayChangeDue.classList.add("hidden");
};

document.getElementById("purchase-btn").addEventListener("click", () => {
  if (!cash.value) {
    return;
  }

  const cashInCents = Math.round(Number(cash.value) * 100);
  const priceInCents = Math.round(total * 100);
  if (cashInCents < priceInCents) {
    alert("Customer does not have enough money to purchase the item");
    clearDom();
    return;
  }

  if (cashInCents === priceInCents) {
    renderChangeDue("No change due - customer paid with exact cash");
    clearDom();
    return;
  }

  let changeDue = cashInCents - priceInCents;
  const reversedCid = [...cid].reverse().map(([denominationName, amount]) => [denominationName, Math.round(amount * 100)]);
  const result = { status: "OPEN", change: [] };
  const totalCID = reversedCid.reduce((prev, [_, amount]) => prev + amount, 0);

  if (totalCID < changeDue) {
    renderChangeDue("Status: INSUFFICIENT_FUNDS");
    return;
  }

  if (totalCID === changeDue) {
    result.status = "CLOSED";
  }

  for (let i = 0; i < reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      const [denominationName, total] = reversedCid[i];
      const possibleChange = Math.min(total, changeDue);
      const count = Math.floor(possibleChange / denominations[i]);
      const amountInChange = count * denominations[i];
      changeDue -= amountInChange;

      if (count > 0) {
        result.change.push([denominationName, amountInChange / 100]);
      }
    }
  }

  if (changeDue > 0) {
    renderChangeDue("Status: INSUFFICIENT_FUNDS");
    return;
  }

  displayChangeDue.classList.remove("hidden");
  displayChangeDue.innerText = "";
  displayChangeDue.innerText = `Status: ${result.status}`;
  displayChangeDue.innerText += result.change.map(([denominationName, amount]) => `${denominationName}: $${amount}`).join("");
});

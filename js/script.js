const userCredentials = document.getElementById("credentials");
const kmDistance = document.getElementById("distance");
const sendButton = document.getElementById("send-button");
const deleteButton = document.getElementById("delete-button");
const ticketChoiceForm = document.getElementById("ticket-choice");
const errorAlert = document.getElementById("error-message");
const ages = document.getElementById("inputGroupSelect01");
const kmPrice = 0.21;
let finalPrice = 0;

// CARDS
const cardUserName = document.querySelector("#name-card .card-user");
const cardRange = document.querySelector("#range-card .card-range");
const cardPrice = document.querySelector("#price-card .card-price");

// console.log(ages);

ticketChoiceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = userCredentials.value;
  const fixedDistance = parseInt(kmDistance.value);
  let agesRange = ages.value;
  console.log("range di età", agesRange);

  let correctInputs = false;
  if (!fullName || !isNaN(fullName)) correctInputs = true;
  if (!fixedDistance || isNaN(fixedDistance) || fixedDistance < 0)
    correctInputs = true;

  if (correctInputs) {
    errorAlert.classList.remove("d-none");
    return;
  }

  errorAlert.classList.add("d-none");
  if (agesRange === "1") {
    agesRange = "Minorenne";
    const discount20 = (finalPrice * 20) / 100;
    finalPrice = fixedDistance * kmPrice - discount20;
  }
  if (agesRange === "3") {
    agesRange = "Over 65";
    const discount40 = (finalPrice * 40) / 100;
    finalPrice = fixedDistance * kmPrice - discount40;
  }
  if (agesRange === "2") {
    agesRange = "Maggiorenne";
    finalPrice = fixedDistance * kmPrice;
  }

  console.log("prezzo finale", finalPrice);
  console.log("nome e cognome", fullName);
  console.log("distanza", fixedDistance);

  cardUserName.innerText = `${fullName}`;
  cardRange.innerText = `${agesRange}`;
  cardPrice.innerText = `${finalPrice}`;
});

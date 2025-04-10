const userCredentials = document.getElementById("credentials");
const kmDistance = document.getElementById("distance");
const sendButton = document.getElementById("send-button");
const deleteButton = document.getElementById("delete-button");
const ticketChoiceForm = document.getElementById("ticket-choice");
const errorAlert = document.getElementById("error-message");
const ages = document.getElementById("inputGroupSelect01");
const kmPrice = 0.21;

// CARDS
const hiddenCard = document.getElementById("hidden-card");
const cardUserName = document.querySelector("#name-card .card-user");
const cardRange = document.querySelector("#range-card .card-range");
const cardPrice = document.querySelector("#price-card .card-price");

// console.log(ages);

ticketChoiceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = userCredentials.value;
  const fixedDistance = parseInt(kmDistance.value);
  let agesRange = ages.value;
  let ageForCard = "Maggiorenne";
  console.log("range di età", agesRange);

  let correctInputs = false;
  if (!fullName || !isNaN(fullName)) {
    correctInputs = true;
  }
  if (!fixedDistance || isNaN(fixedDistance) || fixedDistance < 0) {
    correctInputs = true;
  }
  if (correctInputs) {
    errorAlert.classList.remove("d-none");
    hiddenCard.classList.replace("d-block", "d-none");
  } else {
    errorAlert.classList.add("d-none");
    hiddenCard.classList.replace("d-none", "d-block");
    let finalPrice = fixedDistance * kmPrice;
    if (agesRange === "minorenne") {
      ageForCard = "Minorenne";
      const discount20 = (finalPrice * 20) / 100;
      finalPrice = fixedDistance * kmPrice - discount20;
    }
    if (agesRange === "over-65") {
      ageForCard = "Over 65";
      const discount40 = (finalPrice * 40) / 100;
      finalPrice = fixedDistance * kmPrice - discount40;
    }
    if (agesRange === "maggiorenne") {
      ageForCard = "Maggiorenne";
      finalPrice = fixedDistance * kmPrice;
    }
    hiddenCard.classList.replace("d-none", "d-flex");

    cardUserName.innerText = `${fullName}`;
    cardRange.innerText = `${ageForCard}`;
    cardPrice.innerText = `${finalPrice}`;
  }
  // if (!correctInputs) {
  // } else {
  // }
});

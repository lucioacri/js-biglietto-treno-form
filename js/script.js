const userCredentials = document.getElementById("credentials");
const kmDistance = document.getElementById("distance");
const sendButton = document.getElementById("send-button");
const deleteButton = document.getElementById("delete-button");
const ticketChoiceForm = document.getElementById("ticket-choice");
const errorAlert = document.getElementById("error-message");
const ages = document.getElementById("inputGroupSelect01");
const kmPrice = 0.21;
let finalPrice = 0;
let discountedPrice = 0;

// console.log(ages);

ticketChoiceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = userCredentials.value;
  const fixedDistance = parseInt(kmDistance.value);
  const agesRange = ages.value;
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
    const discount20 = (finalPrice * 20) / 100;
    discountedPrice += finalPrice - discount20;
    console.log("prezzo scontato 20", discountedPrice);
  }
  if (agesRange === "3") {
    const discount40 = (finalPrice * 40) / 100;
    discountedPrice = finalPrice - discount40;
    console.log("prezzo scontato 40", discountedPrice);
  }
  if (agesRange === "2") {
    finalPrice = fixedDistance * kmPrice;
  }

  console.log("prezzo finale", finalPrice);
  console.log("nome e cognome", fullName);
  console.log("distanza", fixedDistance);
});

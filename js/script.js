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

console.log(ages);

ticketChoiceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = userCredentials.value;
  const fixedDistance = parseInt(kmDistance.value);
  const agesRange = ages.option.value;
  console.log(agesRange);

  let correctInputs = false;
  if (!fullName || !isNaN(fullName)) correctInputs = true;
  if (!fixedDistance || isNaN(fixedDistance)) correctInputs = true;

  if (correctInputs) {
    errorAlert.classList.remove("d-none");
    return;
  }

  errorAlert.classList.add("d-none");
  if (agesRange === "Minorenne") {
    const discount20 = (finalPrice * 20) / 100;
    discountedPrice = finalPrice - discount20;
  }
  if (agesRange === "Over 65") {
    const discount40 = (finalPrice * 40) / 100;
    discountedPrice = finalPrice - discount40;
  } else {
    finalPrice = fixedDistance * kmPrice;
  }

  console.log(finalPrice);
  console.log(fullName);
  console.log(fixedDistance);
  console.log(discountedPrice);
});

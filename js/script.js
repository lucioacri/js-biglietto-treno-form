const userCredentials = document.getElementById("credentials");
const kmDistance = document.getElementById("distance");
const sendButton = document.getElementById("send-button");
const deleteButton = document.getElementById("delete-button");
const ticketChoiceForm = document.getElementById("ticket-choice");
const errorAlert = document.getElementById("error-message");
const kmPrice = 0.21;

ticketChoiceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = userCredentials.value;
  const fixedDistance = parseInt(kmDistance.value);

  let correctInputs = false;
  if (!fullName || !isNaN(fullName)) correctInputs = true;
  if (!fixedDistance || isNaN(fixedDistance)) correctInputs = true;

  if (correctInputs) {
    errorAlert.classList.remove("d-none");
  } else errorAlert.classList.add("d-none");

  console.log(fullName);
  console.log(fixedDistance);
});

// let outputText;

// if (isNaN(distance)) {
//   alert("Distanza non corretta");
// } else {
//   const ages =

//     const price = distance * kmPrice;
//     console.log("price", price);
//     if (ages === "Minorenne") {
//       const discount20 = (price * 20) / 100;
//       outputText = price - discount20;
//     }
//     if (ages === "Over 65") {
//       const discount40 = (price * 40) / 100;
//       outputText = price - discount40;
//     } else {
//       outputText = price;
//     }

// }

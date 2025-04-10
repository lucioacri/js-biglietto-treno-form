const kmPrice = 0.21;
let outputText;

const distance = 

if (isNaN(distance)) {
  alert("Distanza non corretta");
} else {
  const ages = 

  
    const price = distance * kmPrice;
    console.log("price", price);
    if (ages === "Minorenne") {
      const discount20 = (price * 20) / 100;
      outputText = price - discount20;
    } 
    if (ages === "Over 65") {
      const discount40 = (price * 40) / 100;
      outputText = price - discount40;
    } else {
      outputText = price;
    }
  
}
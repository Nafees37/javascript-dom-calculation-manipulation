// Share Imput Function Start

function getElementInputValueById(id) {

  const firstDonateInput = parseFloat(document.getElementById(id).value).toFixed(2);

  const finalDonateInput = Number(firstDonateInput);

  return finalDonateInput;

}

// Share Imput Function End



// Share InnerText Function Start

function getElementInnerTextValueById(id) {

  const firstInnerTextValue = parseFloat(document.getElementById(id).innerText).toFixed(2);

  const finalInnerTextValue = Number(firstInnerTextValue);

  return finalInnerTextValue;

}

// Share InnerText Function End




// Share History Button Start

function hideShowButton (id) {

  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("hero-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");

}

// Share History Button End


function cardValidator(cardNumber) {
  isValidCard(cardNumber);
  let alg = toNum(cardNumber);
  return luhnAlg(alg);
}

function isValidCard(cardNumber) {
  if (!cardNumber) {
    throw new Error("Insira uma sequência de 16 dígitos.");
  }
  if (typeof cardNumber === "string"){
    throw new Error("Você deve inserir apenas números.");
  }
  for (let nCard of cardNumber.toString()) {
    if (nCard.charCodeAt() < 48 || nCard.charCodeAt() > 57) {
      throw new Error("Dados incorretos, digite novamente.");
    }
  }
  if (cardNumber.toString().length === 1 || cardNumber.toString().length > 16) {
    throw new Error("Dados incorretos, digite novamente.");
    }
  }

  function toNum(cardNumber){
  let number = cardNumber.toString().split('').reverse();

  let arrayNum = [];
  for (let i in number) {
    arrayNum.push(parseInt(number[i]));
  }
  return arrayNum;
  }

  function luhnAlg(cardVerify){
  for (let i = 1; i < cardVerify.length; i = i + 2) {
    if ((cardVerify[i] * 2) > 9) {
      cardVerify[i] = (parseInt((cardVerify[i] * 2) / 10)) + ((cardVerify[i] * 2) % 10);
    } else {
      cardVerify[i] = cardVerify[i] * 2;
    }
  }

   let cardSum = 0;
  for (let i = 0; i < cardVerify.length; i++) {
    cardSum = cardSum + cardVerify[i];
  }

  if (cardSum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;

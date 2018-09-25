const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const infLib = require("../index.js");

describe("cardValidator()", function () {
  describe("Verificação e validação em caso de dígitos corretos.", function () {
    it("O retorno deverá ser true", () => {
      assert.equal(infLib.cardValidator(36490102462661), true);
    });
  });

  describe("Dados incorretos, digite novamente.", function () {
    it("O retorno deverá ser false.", () => {
      assert.equal(infLib.cardValidator(54637890284235), false);
    });
  });

  describe("Validar cartão como string.", function () {
    it("O retorno será false", () => {
      let stringPar = () => {infLib.cardValidator("36A9O1OZA6Z669")};
      expect(stringPar).to.throw("Você deve inserir apenas números.");
    });
  });

  describe("Dados incorretos, digite novamente.", function () {
    it("O retorno deverá ser false.", () => {
      assert.equal(infLib.cardValidator(36498686098), false);
    });
  });

  describe("Cartão quando não for passado número.", function () {
    it('O retorno deverá ser um erro.', () => {
      let emptyPar = () => {infLib.cardValidator("")};
      expect(emptyPar).to.throw("Insira uma sequência de 16 dígitos.");
    });
  });

  describe("Cartão inserido com caracteres.", function () {
    it('Deverá retornar erro.', () => {
      let errorPar = () => {infLib.cardValidator(3-6490102462661)};
      expect(errorPar).to.throw("Dados incorretos, digite novamente.");
    });
  });

  describe("Verificação de números.", function () {
    it('Dados incorretos, digite novamente.', () => {
      let wrongPar = () => {infLib.cardValidator(1)};
      expect(wrongPar).to.throw("Dados incorretos, digite novamente.");
    });
  });
});
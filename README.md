# Validador de Cartão de Crédito

**Esta biblioteca tem a finalidade de realizar a validação de cartões (crédito ou débito) com o uso do Algoritmo de Luhn, em aplicações web.** Ao realizar a validação, deverá retornar true ou false de acordo com o caso.

## Os métodos utilizados na biblioteca são:

### cardValidator(cardNumber);

Exemplo de uso:

```
$node
let validator = require("wg-card-validator")
validator.cardValidator(36490102462661)
//"true"
```

## Versão 1.0.0

* Funcionalidades: validação de cartão (crédito ou débito);
* No caso de o cartão ser válido retorna true, sendo inválido, retorna false.

## Instalação

* É necessário ter o node + npm já instalados em sua máquina. Para guia de instação visite o [site oficial].

* Proceda a instação utilizando

```
$npm install wg-card-validator
```

.
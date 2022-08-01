const contadorA = require ("./instanciaUnica")
const contadorB = require ("./instanciaUnica")

const contadorC = require ("./instanciaNova")()
const contadorD = require ("./instanciaNova")()

contadorA.inc()
contadorB.inc()
console.log(contadorB.valor, contadorA.valor);//Muda para o valor 3 e percebe mesmo colocado a mais

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);

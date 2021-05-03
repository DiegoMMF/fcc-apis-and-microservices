/**
 * Cash Register
 *
 * Design a cash register drawer function checkCashRegister() that accepts
 * purchase price as the first argument (price), payment as the second
 * argument (cash), and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2D array listing available currency.
 * The checkCashRegister() function should always return an object with a
 * status key and a change key.
 *
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is
 * less than the change due, or if you cannot return the exact change.
 *
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value
 * for the key change if it is equal to the change due. Otherwise, return
 * {status: "OPEN", change: [...]}, with the change due in coins and bills,
 * sorted in highest to lowest order, as the value of the change key.
 *
 * Currency                   Unit	      Amount
 * Penny                      $0.01       (PENNY)
 * Nickel                     $0.05       (NICKEL)
 * Dime                       $0.1        (DIME)
 * Quarter                    $0.25       (QUARTER)
 * Dollar                     $1          (ONE)
 * Five Dollars               $5          (FIVE)
 * Ten Dollars                $10         (TEN)
 * Twenty Dollars             $20         (TWENTY)
 * One-hundred Dollars        $100        (ONE HUNDRED)
 */
function ordenar(cid) {
  // también podríamos haber usado .reverse() pero quería asegurarme de
  // devolver el arreglo bien ordenado sin importar el orden inicial
  const nuevoCid = [];
  const orden = [
    "ONE HUNDRED",
    "TWENTY",
    "TEN",
    "FIVE",
    "ONE",
    "QUARTER",
    "DIME",
    "NICKEL",
    "PENNY",
  ];
  orden.forEach((denomination) => {
    cid.forEach((par) => {
      if (denomination == par[0]) nuevoCid.push(par);
    });
  });
  return nuevoCid;
}

function checkCashRegister(price, cash, cid) {
  const totalSum = (cid.reduce((acc, curr) => acc + curr[1], 0) * 100) / 100;
  let montoAdevolver = cash - price;
  if (montoAdevolver > totalSum)
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (montoAdevolver == totalSum) return { status: "CLOSED", change: cid };

  const nuevoCid = ordenar(cid);
  console.log({cid})
  console.log({nuevoCid})
  const vueltoEfectivo = {};

  for (const key in nuevoCid) {
    let parActual = nuevoCid[key];
    let cifra = 0;
    switch (parActual[0]) {
      case "ONE HUNDRED":
        cifra = 100;
        break;
      case "TWENTY":
        cifra = 20;
        break;
      case "TEN":
        cifra = 10;
        break;
      case "FIVE":
        cifra = 5;
        break;
      case "ONE":
        cifra = 1;
        break;
      case "QUARTER":
        cifra = 0.25;
        break;
      case "DIME":
        cifra = 0.1;
        break;
      case "NICKEL":
        cifra = 0.05;
        break;
      case "PENNY":
        cifra = 0.01;
        break;
      default:
        cifra = 0;
        break;
    }
    while (montoAdevolver >= cifra && parActual[1] >= cifra ) {
      // quitamos un billete/moneda de dicha denominación de la caja
      parActual[1] = (parActual[1] - cifra).toFixed(2);
      parActual[1] = Number.parseFloat(parActual[1])
      montoAdevolver = (montoAdevolver - cifra).toFixed(2);
      montoAdevolver = Number.parseFloat(montoAdevolver);
      !vueltoEfectivo[parActual[0]]
        ? (vueltoEfectivo[parActual[0]] = cifra)
        : (vueltoEfectivo[parActual[0]] += cifra);
    }
  }

  if (montoAdevolver > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

  const change = [];
  for (const key in vueltoEfectivo) {
    let parNuevo = [key, vueltoEfectivo[key]];
    change.push(parNuevo);
  }
  return { status: "OPEN", change };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

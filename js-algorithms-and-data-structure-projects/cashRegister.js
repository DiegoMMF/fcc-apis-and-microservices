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
function checkCashRegister(price, cash, cid) {
  const totalSum = (cid.reduce((acc, curr) => acc + curr[1], 0) * 100) / 100;
  const montoAdevolver = cash - price;
  if (montoAdevolver > totalSum)
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (montoAdevolver == totalSum) return { status: "CLOSED", change: cid };

  const vueltoEfectivo = {};

  for (const key in cid) {
    let cifra = 0;
    switch (key) {
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
    while (montoAdevolver >= cifra) {
      caja[key] -= cifra;
      montoAdevolver -= cifra;
      !vueltoEfectivo[key]
        ? (vueltoEfectivo[key] = cifra)
        : (vueltoEfectivo[key] += cifra);
    }
  }

  if (montoAdevolver > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

  const change = [];
  for (const key in caja) {
    let parNuevo = [key, caja[key]];
    change.push(parNuevo);
  }
  return { status: "OPEN", change };
}

console.log(
  checkCashRegister(19.5, 20, [
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

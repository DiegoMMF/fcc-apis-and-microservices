/**
 * Map the Debris
 * Return a new array that transforms the elements' average
 * altitude into their orbital periods (in seconds).
 * The array will contain objects in the format {name: 'name',
 * avgAlt: avgAlt}.
 * You can read about orbital periods on Wikipedia.
 * The values should be rounded to the nearest whole number. The
 * body being orbited is Earth.
 * The radius of the earth is 6367.4447 kilometers, and the GM
 * value of earth is 398600.4418 km3s-2.
 */
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  // Para calcular "a" debemos sumar la altura del satélite al radio de la Tierra
  // y aplicar la fórmula de wikipedia: T= "dos por pi" por "raíz cuadrada" de
  // ("eje elíptico mayor al cubo" / "parámetro gravitacional standard")
  const toOrbitalPeriod = avgAlt => 2 * Math.PI * (Math.sqrt((earthRadius + avgAlt) ** 3 / GM));
  const nuevoArreglo = [];
  arr.map(element => {
    const nuevoElemento = {};
    nuevoElemento.name = element.name;
    nuevoElemento.orbitalPeriod = Math.round(toOrbitalPeriod(element.avgAlt));
    nuevoArreglo.push(nuevoElemento);
  });
  return nuevoArreglo;
}
console.table(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553}]));
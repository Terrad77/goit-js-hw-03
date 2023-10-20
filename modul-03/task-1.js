"use strict";
function getLastElementMeta(array) {
  return [array.length - 1, array[array.length - 1]];
}

console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // повертає [3, "banana"]);

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

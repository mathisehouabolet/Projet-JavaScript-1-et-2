function inverserChaine(texte) {
  return texte.split("").reverse().join("");
}

// Test
console.log(inverserChaine("bonjour")); // "ruojnob"

function compterCaracteres(texte) {
  return texte.length;
}

// Test
console.log(compterCaracteres("salut")); // 5

function majusculeMots(phrase) {
  return phrase
    .split(" ")
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(" ");
}

// Test
console.log(majusculeMots("je suis développeur web")); 
// "Je Suis Développeur Web"


function trouverMax(tableau) {
  return Math.max(...tableau);
}

function trouverMin(tableau) {
  return Math.min(...tableau);
}

// Test
let nombres = [3, 7, 1, 9, 4];
console.log(trouverMax(nombres)); // 9
console.log(trouverMin(nombres)); // 1


function sommeTableau(tableau) {
  return tableau.reduce((somme, valeur) => somme + valeur, 0);
}

// Test
console.log(sommeTableau([1, 2, 3, 4])); // 10


function filtrerTableau(tableau, condition) {
  return tableau.filter(condition);
}

// Test : garder seulement les nombres pairs
let resultat = filtrerTableau([1, 2, 3, 4, 5, 6], nombre => nombre % 2 === 0);
console.log(resultat); // [2, 4, 6]


function factorielle(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }

  return resultat;
}

// Test
console.log(factorielle(5)); // 120


function estPremier(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Test
console.log(estPremier(7));  // true
console.log(estPremier(10)); // false

function invertirFrase() {
  let frase = document.getElementById('frase').value;
  let fraseInvertida = frase.split('').reverse().join('');
  document.getElementById('fraseInvertida').value = fraseInvertida;
}

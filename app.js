// 1) CAMBIAR EL TEXTO DEL <h1> A "Hora del DEsafio"
const titulo = document.qujerySelector('h1');  // Busca la etiqueta <h1> en el HTML
titulo.testContent = 'Hora del DEsafio';   // Le pone este texto

//2) BOTÓN "Console" mostrar un mensaje en la consola
function mostrarEnConsola() {
   console.log('El boton fue clicado')
}

// 3) BOTÓN "Prompt": pedir ciudad y mostrar alerta con el mensaje
function preguntarCiudad() {
  const ciudad = prompt('Ingresa el nombre de una ciudad de Brasil:');
  // Si el usuario cancela o no escribe nada, evitamos mostrar "null" o vacío
  if (!ciudad) return;
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

// 4) BOTÓN "Alerta": mostrar "Yo amo JS"
function mostrarAlerta() {
  alert('Yo amo JS');
}

// 5) BOTÓN "Suma": pedir 2 números y mostrar la suma en una alerta
function sumarNumeros() {
  const a = prompt('Ingresa el primer número:');
  if (a === null) return; // canceló
  const b = prompt('Ingresa el segundo número:');
  if (b === null) return; // canceló

  // Acepta coma o punto para decimales
  const n1 = Number(String(a).replace(',', '.'));
  const n2 = Number(String(b).replace(',', '.'));

  // Si no son números válidos, avisamos
  if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
    alert('Por favor ingresa números válidos.');
    return;
  }

  alert(`El resultado de la suma es: ${n1 + n2}`);
}

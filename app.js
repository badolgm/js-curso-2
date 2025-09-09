// app.js - organizado y comentado

// ----------------- Helpers -----------------
/** Muestra un toast con mensaje corto (3s) */
function showToast(msg = "") {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.add('hidden'), 2800);
}

/** Convierte texto a número seguro (acepta , o .) */
function toNumberSafe(str) {
  if (str === null) return null;
  const n = Number(String(str).trim().replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
}

// ----------------- UI init -----------------
document.addEventListener('DOMContentLoaded', () => {
  // título
  const titulo = document.getElementById('titulo');
  if (titulo) titulo.textContent = 'Hora del Desafío';

  // botones (obtenidos por id)
  document.getElementById('btn-console').addEventListener('click', mostrarEnConsola);
  document.getElementById('btn-alert').addEventListener('click', mostrarAlerta);
  document.getElementById('btn-prompt').addEventListener('click', preguntarCiudad);
  document.getElementById('btn-sum').addEventListener('click', sumarNumeros);
});

// ----------------- Funciones expuestas -----------------
function mostrarEnConsola() {
  console.log('%c[HoraDelDesafio] El botón Console fue clicado', 'color:#8B5CF6; font-weight:700;');
  showToast('Mensaje enviado a la consola');
}

function mostrarAlerta() {
  alert('¡Yo amo JS!');
}

function preguntarCiudad() {
  const ciudad = prompt('Ingresa el nombre de una ciudad de Brasil:');
  if (!ciudad) {
    showToast('Prompt cancelado');
    return;
  }
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function sumarNumeros() {
  const a = prompt('Ingresa el primer número:');
  if (a === null) { showToast('Suma cancelada'); return; }
  const b = prompt('Ingresa el segundo número:');
  if (b === null) { showToast('Suma cancelada'); return; }

  const n1 = toNumberSafe(a);
  const n2 = toNumberSafe(b);

  if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
    alert('Por favor ingresa números válidos.');
    return;
  }

  const resultado = n1 + n2;
  alert(`El resultado de la suma es: ${resultado}`);
  showToast(`Suma: ${n1} + ${n2} = ${resultado}`);
}

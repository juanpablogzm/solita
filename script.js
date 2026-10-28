const message = document.querySelector('#message');
const counter = document.querySelector('#counter');
const save = document.querySelector('#saveMessage');
const saved = document.querySelector('#savedMessage');
const altarMessage = document.querySelector('#altarMessage');
const storageKey = 'solita-altar-message';

message.addEventListener('input', () => counter.textContent = `${message.value.length} / 420`);

try {
  const storedMessage = localStorage.getItem(storageKey);
  if (storedMessage) {
    message.value = storedMessage;
    counter.textContent = `${message.value.length} / 420`;
    altarMessage.textContent = `“${storedMessage}”`;
    altarMessage.hidden = false;
    saved.textContent = 'Tu mensaje está guardado en su altar. ✦';
    save.textContent = 'Actualizar mensaje →';
  }
} catch (error) {
  saved.textContent = 'No se pudo leer el mensaje guardado en este navegador.';
}

save.addEventListener('click', () => {
  const text = message.value.trim();
  if (!text) {
    saved.textContent = 'Escribe unas palabras para Solita primero.';
    return;
  }

  try {
    localStorage.setItem(storageKey, text);
    altarMessage.textContent = `“${text}”`;
    altarMessage.hidden = false;
    saved.textContent = 'Tu mensaje quedó guardado en su altar. ✦';
    save.textContent = 'Actualizar mensaje →';
  } catch (error) {
    saved.textContent = 'No se pudo guardar el mensaje en este navegador.';
  }
});

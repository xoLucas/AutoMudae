// Sua lista de personagens que quer casar ou reagir a kakeras
const CARTAS_ALVO = ["Zero Two", "Hatsune Miku", "Rem", "Megumin", "Nami", "Saber", "Rias Gremory", "Power", "Asuna", "Mai Sakurajima", "Makima", "Mikasa Ackerman", "Albedo", "Nezuko Kamado", "2B", "Nico Robin", "Ram", "Emilia", "Aqua", "Miku Nakano", "Violet Evergarden", "Shinobu Kochou", "Akame", "Marin Kitagawa", "Esdeath", "Himiko Toga", "Frieren", "Yumeko Jabami", "Rin Tohsaka", "Reze", "Nino Nakano", "Hinata Hyuuga", "Akeno Himejima", "Yor Forger", "Kaguya Shinomiya"].map(normalizar);

const CARD_SELECTOR = '[id^="message-accessories-"]';
const CARD_NAME_SELECTOR = '[class*="embedAuthorName"]'; 
const EMOJI_BUTTON_SELECTOR = 'button'; 
const processadas = new WeakSet();

function normalizar(txt) {
  return (txt || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

const observer = new MutationObserver(() => {
  const cards = document.querySelectorAll(CARD_SELECTOR);
  
  cards.forEach(cardEl => {
    if (processadas.has(cardEl)) return;

    const botao = cardEl.querySelector(EMOJI_BUTTON_SELECTOR);
    const nomeEl = cardEl.querySelector(CARD_NAME_SELECTOR);
    
    if (botao && nomeEl) {
      const nomeOriginal = nomeEl.textContent.trim();
      const nomeLimpo = normalizar(nomeOriginal);
      
      // Verifica se o nomeLimpo bate EXATAMENTE com algum da sua lista
      const bateu = CARTAS_ALVO.some(alvo => nomeLimpo === alvo);

      if (!bateu) {
          processadas.add(cardEl);
          return;
      }

      // Se FOR da lista, inicia o protocolo de captura
      processadas.add(cardEl); 
      console.log(`[AutoMudae] Achou na lista: ${nomeOriginal}! Esperando 0.1s...`);
      
      // Espera 50ms e clica
      setTimeout(() => {
          botao.click();
          console.log(`[AutoMudae] CAPTURADO: ${nomeOriginal}!`);
      }, 50); 
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
console.log("[AutoMudae] Script injetado via Console e vigiando seus favoritos!");
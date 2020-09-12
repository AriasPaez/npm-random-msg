const messages = [
    "Hello (English)",
    "Ciao (Italian)",
    "Salut (French)",
    "Yassou (Greek)",
    "Hallo (German)",
    "Hej (Swedish)",
    "Alô (Portuguese)",
    "Privyét (Russian)",
    "Ni hao (Chinese)",
    "Konnichiwa (Japan)",
    "Hola (Spanish)"
];

const randomMSG = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMSG};
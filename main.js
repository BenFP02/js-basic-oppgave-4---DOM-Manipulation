const makeItRain = () => {
  const riches = Math.floor(Math.random() * 30 + 30);
  const walletShaker = document.getElementById("walletShaker");

  for (let i = 0; i < riches; i++) {
    const dollarSign = document.createElement("div");
    dollarSign.textContent = "$";
    dollarSign.className = "dollarSign";

    const randomXPosition = Math.random() * window.innerWidth;
    dollarSign.style.left = `${randomXPosition}px`;
    dollarSign.style.top = `-50px`;

    walletShaker.appendChild(dollarSign);

    setTimeout(() => {
      walletShaker.removeChild(dollarSign);
    }, 3000);
  }
};

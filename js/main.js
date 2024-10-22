const lampImg = document.getElementById("img-lamp");
const buttonLamp = document.getElementById("switch-button");

buttonLamp.addEventListener("click", () => {
  if (lampImg.classList.contains("off")) {
    lampImg.src = "./img/yellow_lamp.png";
    lampImg.classList.toggle("off");
    buttonLamp.innerHTML = "Spegni";
  } else {
    lampImg.src = "./img/white_lamp.png";
    lampImg.classList.toggle("off");
    buttonLamp.innerHTML = "Accendi";
  }
});

const lampImg = document.getElementById("img-lamp");
const buttonLamp = document.getElementById("switch-button");

buttonLamp.addEventListener("click", () => {
  if (lampImg.classList.contains("off")) {
    lampImg.src = "./img/yellow_lamp.png";
    lampImg.classList.add("on");
    lampImg.classList.remove("off");
    buttonLamp.innerHTML = "Spegni";
  } else if (lampImg.classList.contains("on")) {
    lampImg.src = "./img/white_lamp.png";
    lampImg.classList.remove("on");
    lampImg.classList.add("off");
    buttonLamp.innerHTML = "Accendi";
  }
});

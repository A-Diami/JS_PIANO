// retourne un ensemble d'elements
const keys = document.querySelectorAll(".key"),
    // retourne un element
    note = document.querySelector(".now"),
    // retourne l'ensemble des choix selectionnees
    choix = document.querySelectorAll(".choix");

function jouer(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (key === false) return;

    const CleNote = key.getAttribute("data-note");

    key.classList.add("playing");
    note.innerHTML = CleNote;
    audio.currentTime = 0;
    audio.play();
}
// cette fonction renvoie le nom de la propriete associee a une transition
// lorsque le propertyName est differnt de transform on supprime dans la liste la classe associee
function retirerTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

function choixOn(e, index) {
    e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

choix.forEach(choixOn);

keys.forEach(key => key.addEventListener("transitionend", retirerTransition));

window.addEventListener("keydown", jouer);
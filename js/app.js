
const alterarStatus = (id) => {
  const classRented = "dashboard__item__img--rented";
  const classReturn = "dashboard__item__button--return"

  const isRented = (element) => element.classList.contains(classRented);

  let game = document.getElementById(`game-${id}`);
  let image = game.querySelector('.dashboard__item__img');
  let button = game.querySelector('.dashboard__item__button');
  // let nomeJogo = game.querySelector('.dashboard__item__name');

  if(isRented(image)) {
    image.classList.remove(classRented);
    button.classList.remove(classReturn);
    button.textContent = "Alugar"
  } else {
    image.classList.add(classRented)
    button.textContent = "Devolver";
    button.classList.add(classReturn)
  }
}

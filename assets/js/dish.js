window.addEventListener('load', async () => {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const id = params.get('id');

  const response = await fetch(`https://64b18070062767bc48264cc6.mockapi.io/dishes/${id}`);
  const dish = await response.json();

  const image = document.querySelector('.dish__image img');
  const title = document.querySelector('.dish__title');
  const label = document.querySelector('.dish__label');
  const price = document.querySelector('.dish__price');
  const description = document.querySelector('.dish__description');

  image.src = dish.image;
  title.textContent = dish.name;
  label.textContent = dish.label;
  price.textContent = '$' + dish.price;
  description.textContent = dish.description;
});
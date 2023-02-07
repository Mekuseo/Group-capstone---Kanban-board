import "./style.css"
import {popup} from './popup.js';
import {getData} from './api';
const apiDisplay = document.querySelector('.api-display');

const createCard = async (character) => {
  const images = await getData();
  images.forEach((image) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${image.imageUrl}" alt="${image.name}" />
      <div class='image-name'>
        <h2>${image.name}</h2>
        <i class="fa-solid fa-heart"></i>
      </div>
      <p class='likes-count'>5 Likes</p>
      <button>Comments</button>
      <button>Reservations</button>
      `
    apiDisplay.appendChild(card);
  })
}

createCard();
popup();
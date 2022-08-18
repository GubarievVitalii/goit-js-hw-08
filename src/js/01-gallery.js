import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const listGallery = document.querySelector('.gallery');

const newArray = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    alt="${description}">
    </a></li>`;
  })
  .join('');

listGallery.insertAdjacentHTML('afterbegin', newArray);

const galerySimple = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galerySimple);

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function addGalleryMarkup(images) {
  const markup = images.map(image => createGalleryMarkup(image)).join('');

  return (galleryRef.innerHTML = markup);
}

function createGalleryMarkup(image) {
  const { original, preview, description } = image;

  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}

addGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  openModal(event);
}

function openModal(event) {
  basicLightbox
    .create(
      `
		<img src="${event.target.dataset.source}">
	`
    )
    .show();
}

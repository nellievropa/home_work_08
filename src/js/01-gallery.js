// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createImageMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);
galleryContainer.addEventListener('click', onImageClick);

function createImageMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
       return `
       <li class="gallery__item" 
       position: relative
       display: block>
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" 
           src="${preview}" 
           alt="${description}"
           />
        </a>
        <div uk-lightbox>
    <a class="uk-button uk-button-default" 
    href="${original}" data-caption="${description}">
    </a>
</div>
     </li>`;
     
    })
    .join('');
};
console.log(createImageMarkup(galleryItems));



function onImageClick(event) {
   //  console.log(event.target);
event.preventDefault();
// const originalUrl = event.target.dataset.source;
// const captions = event.target.alt

const lightbox = new SimpleLightbox(".gallery a", {
   captionsData: "alt",
   captionPosition: "bottom",
   captionDelay: 250,
 });

}


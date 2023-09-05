// import * as basicLightbox from 'basiclightbox'
// import "basiclightbox/dist/basicLightbox.min.css";

function onClick(evt) {
    evt.preventDefault();
if(evt.target.classList.contains('js-info')){
    const product = findProduct(evt.target);
createModal(product);
}


if(evt.target.classList.contains('js-basket')){
    
    const product = findProduct(evt.target);
    baskerArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(baskerArr));
}

if(evt.target.classList.contains('js-favorite')){    
    const product = findProduct(evt.target);
    // після того як отримали продукт, перевіряємо , щоб не дублювалися однакові
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
        if (inStorage) {
            return;
        }
    
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
}
}


export {onClick}
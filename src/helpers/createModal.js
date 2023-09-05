import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

import { closeModal } from '../helpers/closeModal'


function createModal(product) {
// const option = {       
//     onShow() {
//         console.log(this);
//         document.addEventListener('keydown', closeModal)
// },
    
//     onClose() {},
//  };

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${product.img}" alt="${product.name}" width="250">
    <h2>${product.name}</h2>
    <h3>${product.price} грн</h3>
    <p>${product.description}</p>
    <div>
        <button class="js-favorite">add to Favorite</button>
        <button class="js-basket">add to basket</button>
    </div>
    </div>
    `,  {    
        // створимо ключ handler
        handler: null,  
        onShow(instance) {
            // closeModal.bind записує копію!!!
            this.handler = closeModal.bind(instance)
            document.addEventListener('keydown', this.handler)
    },
        
        onClose() {
            document.removeEventListener('keydown', this.handler)
        },
     });
    instance.show();
// потрібно instance прив'язати до об'єкту
// звичайна функція закриття модалки
    
    // function closeModal(evt) {
    //     if(evt.code === 'Escape') {
    //      instance.close()
    //     }
    //  }
}


export {createModal}; 

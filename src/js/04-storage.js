// import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

import { common } from './commom';
import { createMarkup } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';
import { instruments } from '../helpers/instruments';
// import { onClick } from '../helpers/onClick';



//  отримуєм доступ до инпуту
const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

// константи виносим в окремі змінні, щоб легше було їх використовувати,потім переносим їх у файл common.js
// const KEY_FAVORITE = 'favorite';
// const KEY_BASKET = 'basket';

// для того, щоб зберігати дані створюємо 2 пустих масива
// щоб дані зберігалися після перезавантаження сторінки виористовуємо JSON.parse і оператор АБО ??
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const baskerArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];


// функція,  яка буде створювати розмітку карток
//   {
//     id:8,
//     img: "https://static.dnipro-m.ua/cache/products/2741/catalog_origin_271775.jpg",
//     name: "Генератор",
//     price: 40890,
//     description: "Генератор бензиновий Dnipro-M GX-25",

// },

// базова розмітка- це масив об'єктів
// function createMarkup(arr) {
//     const markup = arr.map(({id,img,name}) => `<li data-id ="${id}" class="js-card">
//     <img src="${img}" alt="${name}" width=300>
//     <h2>${name}</h2>
//     <p ><a href="#" class="js-info">more information</a></p>
//     <div>
//         <button class="js-favorite">add to Favorite</button>
//         <button class="js-basket">add to basket</button>
//     </div>
// </li>`)
// .join('');

// list.innerHTML = markup;
// }

createMarkup(instruments, list);
list.addEventListener('click', onClick);

function onClick(evt){
    // скинули поведінку кнопок і посилань за замовчуванням
evt.preventDefault();
if(evt.target.classList.contains('js-info')){
// const { id } = evt.target.closest('.js-card').dataset;
// вище - знайшли номер id
// console.log(id);
// const product = findProduct(Number(id));
// console.log(product);

// це другий варіант 
const product = findProduct(evt.target);
createModal(product);
// const instance = basicLightbox.create(`
// <div class="modal">
// <img src="${product.img}" alt="${product.name}" width="250">
// <h2>${product.name}</h2>
// <h3>${product.price} грн</h3>
// <p>${product.description}</p>
// <div>
//     <button class="js-favorite">add to Favorite</button>
//     <button class="js-basket">add to basket</button>
// </div>
// </div>
// `);
// instance.show();
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


// це перший варіант, коли окремо шукаємо ID і сам продукт і використовуємо їх в if
// if(evt.target.classList.contains('js-favorite')){
//     const { id } = evt.target.closest('.js-card').dataset;
//     const product = findProduct(Number(id));
// }

// function findProduct(productId){
//     return instruments.find(({id}) => id === productId)
// }


// це другий варіант, коли і ID і сам продукт шукаємо в одній функції , щоб не повторюватись
// але тут звертаємось до HTML елементу
function findProduct(elem){
    const productId = Number(elem.closest('.js-card').dataset.id);
    return instruments.find(({id}) => id === productId)
}


// try {
//     console.log(tet_value);
// } catch (err) {
//     console.log(err);
// } finally {

// }

// console.log('after error');


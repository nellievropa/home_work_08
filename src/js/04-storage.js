import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

const instruments = [
    {
        id:1,
        img: "https://static.dnipro-m.ua/cache/products/6523/catalog_origin_278056.jpg",
        name: "Шуруповерет",
        price: 150,
        description: "Акумуляторний дриль-шуруповерт Dnipro-M CD-218Q + Акумуляторна батарея BP-220 + Зарядний пристрій FC-223"

    },
    {
        id:2,
        img: "https://static.dnipro-m.ua/cache/products/5521/catalog_origin_276885.jpg",
        name: "Перфоратор",
        price: 3948,
        description: "Перфоратор прямий Dnipro-M RH-12Q",

    },
    {
        id:3,
        img: "https://static.dnipro-m.ua/cache/products/8025/catalog_origin_275516.jpg",
        name: "Шліфмашина",
        price: 1299,
        description: "Шліфмашина кутова Dnipro-M GL-125S + Диск відрізний Dnipro-M ULTRA 125 мм 1,2 мм (3 шт.)",

    },
    {
        id:4,
        img: "https://static.dnipro-m.ua/cache/products/5685/catalog_origin_270099.jpg",
        name: "Пила",
        price: 11049,
        description: "Електропила ланцюгова Dnipro-M DSE-15S",

    },
    {
        id:5,
        img: "https://static.dnipro-m.ua/cache/products/2020/catalog_origin_261751.jpg",
        name: "Рівень",
        price: 897,
        description: "Рівень будівельний Dnipro-M ULTRA 1000 мм",

    },
    {
        id:6,
        img: "https://static.dnipro-m.ua/cache/products/6566/catalog_origin_270253.jpg",
        name: "Тример",
        price: 3699,
        description: "Тример електричний Dnipro-M 110",

    },
    {
        id:7,
        img: "https://static.dnipro-m.ua/cache/products/6531/catalog_origin_270209.jpg",
        name: "Мотокоса",
        price: 11049,
        description: "Мотокоса Dnipro-M 50RX",

    },
    {
        id:8,
        img: "https://static.dnipro-m.ua/cache/products/2741/catalog_origin_271775.jpg",
        name: "Генератор",
        price: 40890,
        description: "Генератор бензиновий Dnipro-M GX-25",

    },
    
];

//  отримуєм доступ до инпуту
const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
// функція, яка буде створювати розмітку карток
//   {
//     id:8,
//     img: "https://static.dnipro-m.ua/cache/products/2741/catalog_origin_271775.jpg",
//     name: "Генератор",
//     price: 40890,
//     description: "Генератор бензиновий Dnipro-M GX-25",

// },

// базова розмітка- це масив об'єктів
function createMarkup(arr) {
    const markup = arr.map(({id,img,name}) => `<li data-id ="${id}" class="js-card">
    <img src="${img}" alt="${name}" width=300>
    <h2>${name}</h2>
    <p ><a href="#" class="js-info">more information</a></p>
    <div>
        <button>add to Favorite</button>
        <button>add to basket</button>
    </div>
</li>`)
.join('');

list.innerHTML = markup;
}

list.addEventListener('click', onClick);

function onClick(evt){
    // скинули поведінку кнопок і посилань за замовчуванням
evt.preventDefault();
if(evt.target.classList.contains('js-info')){
const { id } = evt.target.closest('.js-card').dataset;
// вище - знайшли номер id
// console.log(id);
const product = findProduct(Number(id));
// console.log(product);
const instance = basicLightbox.create(`
<div class="modal">
<img src="${product.img}" alt="${product.name}" width="250">
<h2>${product.name}</h2>
<h3>${product.price} грн</h3>
<p>${product.description}</p>
<div>
<button>add to Favorite</button>
<button>add to basket</button>
</div>
</div>
`);
instance.show();
}
}

createMarkup(instruments);

function findProduct(productId){
    return instruments.find(({id}) => id === productId)
}
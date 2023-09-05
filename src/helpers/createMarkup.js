function createMarkup(arr, list) {
    let markup;
    if(arr.length) {
   markup = arr
    .map(({id,img,name}) => `<li data-id ="${id}" class="js-card">
    <img src="${img}" alt="${name}" width=300>
    <h2>${name}</h2>
    <p ><a href="#" class="js-info">more information</a></p>
    <div>
        <button class="js-favorite">add to Favorite</button>
        <button class="js-basket">add to basket</button>
    </div>
</li>`)
.join('');
} else {
    markup = `<li>
    <img src="https://img.freepik.com/free-photo/empty-and-open-box-on-the-white_144627-4469.jpg?w=740&t=st=1693900871~exp=1693901471~hmac=5b93a12b5df199418f649ed7d873cce018e68d0c1838113e71856bc80c5825eb" alt="404" width=600>
    `
}
list.innerHTML = markup;
}

export {createMarkup};
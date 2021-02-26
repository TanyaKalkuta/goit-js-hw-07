const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector("#gallery");

console.log(galleryRef);

const makeItemGallery = image => {
  const { url, alt } = image;

  return `<li class='image-item'>
    <img class='image-item' src='${url}' alt='${alt}'/>
    </li>`;
};

console.log(makeItemGallery(images[0]));


const makeListGallery = images
  .map(makeItemGallery)
  .join('');



galleryRef.insertAdjacentHTML('beforeend', makeListGallery);


/* 
const listImagesRef = images.map(image => {

    const itemList = document.createElement('li');
    itemList.classList.add('list-item');

    const itemImages = document.createElement('img');
    itemImages.src = image.url;
    itemImages.alt = image.alt;
    itemImages.classList.add('image-item');
    itemList.appendChild(itemImages);

    return itemList;
    
});
galleryRef.append(...listImagesRef);

 */

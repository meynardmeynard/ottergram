var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function randImage(){
  a = ["https://cdn.shopify.com/s/files/1/0032/7882/products/tacocat_art.png?v=1447870796",
       "https://smhttp-ssl-5891.nexcesscdn.net/media/catalog/product/cache/1/image/1800x/6b9ffbf72458f4fd2d3cb995d92e8889/t/a/tacocat_newthumb.png",
       "http://www.tshirtlaundry.com/assets/images/photos/Tacocat3-5-2013-2.jpg",
       "https://s-media-cache-ak0.pinimg.com/236x/a0/2e/a9/a02ea959c1ab35b4ebcd81564b902555.jpg",
       "https://i.ytimg.com/vi/oQvxASWxZZo/hqdefault.jpg",
       "http://www.dimmak.com/wp-content/uploads/2013/10/post-14725-Taco-cat-backwards-is-still-ta-mSjr.jpeg"];
  return a[Math.floor(Math.random()*a.length)]
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(randImage(), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();

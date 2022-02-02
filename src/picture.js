import {pictures} from "./data";

var pictureTemplate = document.querySelector('#picture').content;

var renderPicture = (picture) => {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__stat--likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__stat--comments').textContent = picture.comments;

  return pictureElement;
}

export var pictureFragment = document.createDocumentFragment();
for (var i = 0; i < pictures.length; i++) {
  pictureFragment.appendChild(renderPicture(pictures[i]))
}

import {fillBigPicture} from "./preview";
import {renderPicture} from "./picture";

var bigPicture = document.querySelector('.big-picture');
var bigPictureCancel = bigPicture.querySelector('.cancel');
var pictureFragment = document.createDocumentFragment();
var pictureList = document.querySelector('.pictures');

var addClickToPictures = (pictures, button, index) => {
  button.addEventListener('click', function (evt) {
    bigPicture.classList.remove("hidden");
    fillBigPicture(pictures[index]);
  });
}

var addPictureLinkHandlers = (pictures) => {
  var pictureList = document.querySelectorAll('.picture__link');

  for (var i = 0; i < pictureList.length; i++) {
    var button = pictureList[i];
    addClickToPictures(pictures, button, i);
  }
}

export var renderPictures = (pictures) => {
  for (var i = 0; i < pictures.length; i++) {
    pictureFragment.appendChild(renderPicture(pictures[i]))
  }

  pictureList.appendChild(pictureFragment);
  addPictureLinkHandlers(pictures);
}

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add("hidden");
});

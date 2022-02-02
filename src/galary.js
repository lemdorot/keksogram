import {fillBigPicture} from "./preview";
import {pictures} from "./data";

var bigPicture = document.querySelector('.big-picture');
var bigPictureCancel = bigPicture.querySelector('.cancel');

var addClickToPictures = (button, index) => {
  button.addEventListener('click', function (evt) {
    bigPicture.classList.remove("hidden");
    fillBigPicture(pictures[index]);
  });
}

export var addPictureLinkHandlers = () => {
  var pictureList = document.querySelectorAll('.picture__link');

  for (var i = 0; i < pictureList.length; i++) {
    var button = pictureList[i];
    addClickToPictures(button, i);
  }
}

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add("hidden");
});


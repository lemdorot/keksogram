import {fillBigPicture} from "./preview";

var bigPicture = document.querySelector('.big-picture');
var bigPictureCancel = bigPicture.querySelector('.cancel');

var addClickToPictures = (pictures, button, index) => {
  button.addEventListener('click', function (evt) {
    bigPicture.classList.remove("hidden");
    fillBigPicture(pictures[index]);
  });
}

export var addPictureLinkHandlers = (pictures) => {
  var pictureList = document.querySelectorAll('.picture__link');

  for (var i = 0; i < pictureList.length; i++) {
    var button = pictureList[i];
    addClickToPictures(pictures, button, i);
  }
}

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add("hidden");
});

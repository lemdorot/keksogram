import {renderPictures} from "./galary";
import {getRandomNumber} from "./utils";

var photoFilterElement = document.querySelector('.img-filters');
var photoFilterButtonElements = document.querySelectorAll('.img-filters__button');

export var photoSorting = function (pictures) {
  photoFilterElement.classList.remove('img-filters--inactive');

  photoFilterElement.addEventListener('click', function (evt) {
    for (var i = 0; i < photoFilterButtonElements.length; i++) {
      photoFilterButtonElements[i].classList.remove('img-filters__button--active');
    }

    evt.target.classList.add('img-filters__button--active');
    makeGalleryClear();

    switch (evt.target.id) {
      case ('filter-popular') :
        renderPictures(pictures);
        break;
      case ('filter-new') :
        renderPictures(getNewPhotos(pictures));
        break;
      case ('filter-discussed') :
        renderPictures(sortPhotosByComments(pictures));
        break;
    }
  });

  var makeGalleryClear = function () {
    var picturesToRemove = document.querySelectorAll('.picture__link');
    picturesToRemove.forEach(function (photo) {
      photo.remove();
    });
  };

  var getRandomPhotos = function () {
    var newPhotoArr = new Set();

    return function (pictures) {
      if (newPhotoArr.size != 0) {
        return Array.from(newPhotoArr);
      } else {
        while (true) {
          newPhotoArr.add(pictures[getRandomNumber(0, pictures.length - 1)]);
          if (newPhotoArr.size == 10) {
            break;
          }
        }

        return Array.from(newPhotoArr);
      }
    }
  };

  var getNewPhotos = getRandomPhotos();

  var sortPhotosByComments = function (pictures) {
    var tempArr = pictures.slice();
    return  tempArr.sort((a, b) => b.comments.length - a.comments.length);
  }
};

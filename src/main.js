import {pictureFragment, addPictureLinkHandlers} from "./pictures/pictures";

var pictureList = document.querySelector('.pictures');

pictureList.appendChild(pictureFragment);

addPictureLinkHandlers();

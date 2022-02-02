import {addPictureLinkHandlers} from "./galary";
import {pictureFragment} from "./picture";
import {sliderChange} from "./form";

var pictureList = document.querySelector('.pictures');

pictureList.appendChild(pictureFragment);

addPictureLinkHandlers();

sliderChange();

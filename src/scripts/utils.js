import {popupFormPlace} from "./index.js";

export function openPopup(popup) {             // функция открытия попапа
  popup.classList.add('popup_opened');
}

export function closePopup(popup) {            // функция закрытия попапа
  popup.classList.remove('popup_opened');
  popupFormPlace.reset();
}

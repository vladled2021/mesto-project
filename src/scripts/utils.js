import {popupFormPlace} from "./index.js";

export function openPopup(popup) {             // функция открытия попапа
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') //<==нашли открытый попап
    //<== закрыли попап с помощью функции `closePopup` ==
    closePopup(openedPopup)
  }
}

export function resetFormPlaceButton() {
  formPlace.elements.buttonPlaceCreate.classList.add('popup__submit_disabled');
  formPlace.elements.buttonPlaceCreate.disabled = true;
}

export function closePopup(popup) {            // функция закрытия попапа
  popup.classList.remove('popup_opened');
  //popupFormPlace.reset();
  document.removeEventListener('keydown', closeByEscape);
}

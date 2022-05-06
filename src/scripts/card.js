import {elementsSection, formPlace, popupCardImage, elementTemplate, popupTypePlace, popupTypeImage, popupInputTitle, popupInputImageLink, popupCardImageTitle, popupFormPlace} from "./index.js";
import {openPopup, closePopup, resetFormPlaceButton} from './utils.js';
import { disableButton} from "./validate.js";

function createCard(item) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementTrash = cardElement.querySelector('.element__trash');

  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__image').alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;

  cardElement.querySelector('.element__like').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  });
  elementTrash.addEventListener('click', function () {
    elementTrash.closest('.element').remove();
  });
  cardElement.querySelector('.element__image').addEventListener('click', function (event) {
   popupCardImage.src = event.target.src;
   popupCardImage.alt = event.target.alt;
   popupCardImageTitle.textContent = event.target.alt;
   openPopup(popupTypeImage);
  });
  return cardElement
}

function handleFormCreateCard(evt) {          // карточки с данными из попапа
  evt.preventDefault();
  const popupPlaceInputsValuesObject = {
    name: popupInputTitle.value,
    link: popupInputImageLink.value
  };
  //const cardElement = createCard(popupPlaceInputsValuesObject);
  elementsSection.prepend(createCard(popupPlaceInputsValuesObject));
  closePopup(popupTypePlace);
  popupFormPlace.reset();
  resetFormPlaceButton();
}

function addArrayElement(arr) {                // карточки, с данными из массива
  for (let i = 0; i < arr.length; i += 1) {
    //const cardElement = createCard(arr[i]);
    elementsSection.append(createCard(arr[i]));
  }
}

export {createCard, handleFormCreateCard, addArrayElement};

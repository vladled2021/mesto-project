import {elementsSection, popupTypePlace, popupTypeImage, popupInputTitle, popupInputImageLink} from "./index.js";
import {openPopup, closePopup} from './utils.js';

function createCard(item) {
  const elementTemplate = document.querySelector('#element').content;
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
   popupTypeImage.querySelector('.popup__image').src = event.target.src;
   popupTypeImage.querySelector('.popup__image').alt = event.target.alt;
   popupTypeImage.querySelector('.popup__image-title').textContent = event.target.alt;
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
  popupInputTitle.value = '';
  popupInputImageLink.value = '';
}

function addArrayElement(arr) {                // карточки, с данными из массива
  for (let i = 0; i < arr.length; i += 1) {
    //const cardElement = createCard(arr[i]);
    elementsSection.append(createCard(arr[i]));
  }
}

export {createCard, handleFormCreateCard, addArrayElement};

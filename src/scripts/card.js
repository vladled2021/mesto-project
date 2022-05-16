import {elementsSection, formPlace, popupCardImage, elementTemplate, popupTypePlace, popupTypeImage, popupInputTitle, popupInputImageLink, popupCardImageTitle, popupFormPlace} from "./index.js";
import {openPopup, closePopup, resetFormPlaceButton} from './utils.js';
import { disableButton} from "./validate.js";

function createCard(item) {
  console.log(item.likes);
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementTrash = cardElement.querySelector('.element__trash');
  const elementLike = cardElement.querySelector('.element__like');
  const elementLikeQuantity = cardElement.querySelector('.element__like-quantity');
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__image').alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;


   // elementTrash.remove();


  elementLikeQuantity.textContent = item.likes.length.toString();
  elementLike.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
    if (event.target.classList.contains('element__like_active')) {
      console.log(1000000);
    }

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

  fetch('https://nomoreparties.co/v1/plus-cohort7/cards', {
    method: 'POST',
    headers: {
      authorization: 'da7fb63d-939f-4bfb-bbe1-e632a3997f26',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify ({
      name:popupInputTitle.value,
      link:popupInputImageLink.value
    })
  })

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

function addArrayElement(object) {                // карточки, с данными из сервера
  //for (let i = 0; i < arr.length; i += 1) {
    //const cardElement = createCard(arr[i]);
    elementsSection.append(createCard(object));
  //}
}

export {createCard, handleFormCreateCard, addArrayElement};

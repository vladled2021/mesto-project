import {profileName, popupFormPlace, popupSubmit, popupTypeImage, popupTypePlace, popupTypeProfile, popupInputJob, popupInputName, profileActivity} from './index.js';
import {openPopup, closePopup, resetFormPlaceButton} from './utils.js';

function handleProfileFormSubmit(evt) {          // функция добавления, вводимых данных в профиль
  evt.preventDefault();
  fetch('https://nomoreparties.co/v1/plus-cohort7/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'da7fb63d-939f-4bfb-bbe1-e632a3997f26',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: popupInputName.value,
      about: popupInputJob.value
    })
  });
  profileName.textContent = popupInputName.value;
  profileActivity.textContent = popupInputJob.value;
  closePopup(popupTypeProfile);
}

function openProfileEditPopup() {  // функция добавления данных в инпуты попапа "Редактирование профиля" из html-разметки и передачи параметра в функцию открытия попапа
  openPopup(popupTypeProfile);
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileActivity.textContent;
}

function openPlaceAddPopup() {   // функция передачи параметра в функцию открытия попапа
  openPopup(popupTypePlace);
  resetFormPlaceButton();
  popupFormPlace.reset();
}

// function closeProfileEditPopup() { // функция передачи параметра в функцию закрытия попапа
//   closePopup(popupTypeProfile);
// }

// function closePlaceAddPopup() {   //  --//--
//   closePopup(popupTypePlace);
// }

// function closePopupTypeImage() {
//   closePopup(popupTypeImage);
// }

export {handleProfileFormSubmit, openProfileEditPopup, openPlaceAddPopup};

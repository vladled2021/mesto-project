const hideInputError = (inputElement, errorElement, config) => {
  inputElement.classList.remove(config.inputInvalidClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
}

const showInputError = (inputElement, errorElement, errorMessage, config) => {

  inputElement.classList.add(config.inputInvalidClass);
  errorElement.classList.add(config.errorClass);
  if (errorMessage === 'Заполните это поле.') {
    errorElement.textContent = 'Вы пропустили это поле.';
  }
  else if (errorMessage === 'Введите URL.') {
    errorElement.textContent = 'Введите адрес сайта.';
  }
  else {
    errorElement.textContent = errorMessage;
  }
}

const checkInputValidity = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  if (!inputElement.validity.valid) {
    showInputError(inputElement, errorElement, inputElement.validationMessage, config);
  } else {
    hideInputError(inputElement, errorElement, config);
  }
};

const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.buttonDisabledClass);
  buttonElement.disabled = true;
};

const enableButton = (buttonElement, config) => {
  buttonElement.classList.remove(config.buttonDisabledClass);
  buttonElement.disabled = false;
};

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (formElement, inputList, config) => {
  const buttonElement = formElement.querySelector(config.buttonSelector);

  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  toggleButtonState(formElement, inputList, config);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      // проверка валидации этого inputElement
      checkInputValidity(formElement, inputElement, config);
      // проверять состояние кнопки сабмита
      toggleButtonState(formElement, inputList, config);
    });
  });
};

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach(formElement => {
    formElement.addEventListener('submit', event => {
      event.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

export {hideInputError, showInputError, checkInputValidity,
  disableButton, enableButton, hasInvalidInput,
  toggleButtonState, setEventListeners, enableValidation};

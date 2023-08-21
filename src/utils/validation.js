const hasWhiteSpace = /\s/;
const startsWithWhiteSpace = /^\s/;

const containsNumber = /\d+$/g;
// let regex = /^[a-zA-Z ]{2,30}$/;
const isEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)\-\_\+\=\{\}\[\]\|\<\>\,\/\\~.:;"`?￡'])(?=.{8,})/;

const containsLetter = /[a-zA-Z]/;
const containsNonLetter = /[^a-zA-Z]/;
const containsNonLetterExcSpaces = /[^a-zA-Z\s]/;

// matches letters, spaces, emojis, special chars-($%^&), any non number
const containsNonNumber = /[^0-9]/;

export const isUserNameValid = name => {
  if (name === '' || hasWhiteSpace.test(name)) {
    return {
      valid: false,
      msg: 'Name should not contain spaces',
    };
  } else if (containsNumber.test(name) || containsNonLetter.test(name)) {
    return {
      valid: false,
      msg: 'Name should only contain valid letters',
    };
  } else {
    return {valid: true};
  }
};
export const isFullNameValid = name => {
  if (name === '' || startsWithWhiteSpace.test(name)) {
    return {
      valid: false,
      msg: 'Name should not begin with a space',
    };
  } else if (containsNonLetterExcSpaces.test(name)) {
    return {
      valid: false,
      msg: 'Name should only contain valid letters',
    };
  } else {
    return {valid: true};
  }
};

export const isPhoneNumberValid = number => {
  if (number === '' || hasWhiteSpace.test(number)) {
    return {
      valid: false,
      msg: 'Phone Number should not contain any space\n\n',
    };
  } else if (containsLetter.test(number) || containsNonNumber.test(number)) {
    return {
      valid: false,
      msg: 'Phone Number should only contain valid numbers',
    };
  } else {
    return {valid: true};
  }
};

export const isEmailValid = email => {
  if (email === '' || !isEmail.test(email)) {
    return {
      valid: false,
      msg: 'Please enter a valid email',
    };
  } else {
    return {valid: true};
  }
};

export const isPasswordValid = pwd => {
  if (pwd === '') {
    return {
      valid: false,
      msg: 'Please enter a password',
    };
  } else if (pwd?.length < 8) {
    return {
      valid: false,
      msg: 'Must contain at least 8 characters',
    };
  } else if (!isPassword.test(pwd)) {
    return {
      valid: false,
      msg: 'Must contain at least One Uppercase, One Lowercase, One Number and One Special Case Character',
    };
  } else {
    return {valid: true};
  }
};

export const checkPasswordComplexity = input => {
  const regularExpression =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)\-\_\+\=\{\}\[\]\|\<\>\,\/\\~.:;"`?￡'])(?=.{8,})/;
  const valid = regularExpression.test(input);
  return valid;
};

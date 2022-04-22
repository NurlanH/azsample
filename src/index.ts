import { genderTypes } from './enums';
import { Services } from './services';

const service: Services = new Services();
const checker = ['male', 'female'];

export function username(gender: genderTypes) {
  try {
    if (!checker.includes(gender)) throw new Error('Gender must be female or male');

    const getFirstname = service.firstname(gender);
    const getLastname = service.lastname(gender);
    const getFullname = getFirstname + getLastname;
    const convertToEnChar = service.convertAzToEnChar(getFullname.toLowerCase());

    return service.replaceSymbolRandom(convertToEnChar);
  } catch (e) {
    throw new Error('Something went wrong');
  }
}

export function email(gender: genderTypes) {
  try {
    if (!checker.includes(gender)) throw new Error('Gender must be female or male');
    const getFirstname = service.firstname(gender);
    const getLastname = service.lastname(gender);
    const getFullname = getFirstname + getLastname;
    const convertToEnChar = service.convertAzToEnChar(getFullname.toLowerCase());
    const emailName = service.replaceSymbolRandom(convertToEnChar);
    return service.generateEmail(emailName);
  } catch (e) {
    throw new Error('Something went wrong');
  }
}

export function phone() {
  try {
    return service.phone();
  } catch (e) {
    throw new Error('Something went wrong');
  }
}

export function firstname(gender: genderTypes) {
  try {
    if (!checker.includes(gender)) throw new Error('Gender must be female or male');
    return service.firstname(gender);
  } catch (e) {
    throw new Error('Something went wrong');
  }
}

export function lastname(gender: genderTypes) {
  try {
    if (!checker.includes(gender)) throw new Error('Gender must be female or male');
    return service.lastname(gender);
  } catch (e) {
    throw new Error('Something went wrong');
  }
}

export function getInfo(gender: genderTypes) {
  try {
    if (!checker.includes(gender)) throw new Error('Gender must be female or male');
    return service.getInfo(gender);
  } catch (e) {
    throw new Error('Something went wrong');
  }
}

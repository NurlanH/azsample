import { genderTypes } from './enums';
import { Services } from './services';

const service: Services = new Services();

export function username(gender: genderTypes) {
  const getFirstname = service.firstname(gender);
  const getLastname = service.lastname(gender);
  const getFullname = getFirstname + getLastname;
  const convertToEnChar = service.convertAzToEnChar(getFullname.toLowerCase());

  return service.replaceSymbolRandom(convertToEnChar);
}

export function email(gender: genderTypes) {
  const getFirstname = service.firstname(gender);
  const getLastname = service.lastname(gender);
  const getFullname = getFirstname + getLastname;
  const convertToEnChar = service.convertAzToEnChar(getFullname.toLowerCase());
  const emailName = service.replaceSymbolRandom(convertToEnChar);
  return service.generateEmail(emailName);
}

export function phone() {
  return service.phone();
}

export function firstname(gender: genderTypes) {
  return service.firstname(gender);
}

export function lastname(gender: genderTypes) {
  return service.lastname(gender);
}

export function getInfo(gender: genderTypes) {
  return service.getInfo(gender);
}
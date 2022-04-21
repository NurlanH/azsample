import { firstNameList, surnameList, phoneProviders } from './data';
import { Services } from './services';
import { genNum, genNumPhone } from './utils';

const service: Services = new Services();

export function username() {
  const getFirstname = service.getFirstname();
  const getLastname = service.getLastname();
  const getFullname = getFirstname + getLastname;
  const convertToEnChar = service.convertAzToEnChar(getFullname.toLowerCase());

  return service.replaceSymbolRandom(convertToEnChar);
}

export function email() {
  const getFirstname = service.getFirstname();
  const getLastname = service.getLastname();
  const getFullname = getFirstname + getLastname;
  const convertToEnChar = service.convertAzToEnChar(getFullname.toLowerCase());
  const emailName = service.replaceSymbolRandom(convertToEnChar);
  return service.generateEmail(emailName);
}

export function phone() {
  const generatePhone = '+994' + phoneProviders[genNum(phoneProviders.length - 1)] + genNumPhone();
  return generatePhone;
}

export function firstname() {
  return firstNameList[genNum(firstNameList.length - 1)];
}

export function lastname() {
  return surnameList[genNum(surnameList.length - 1)];
}

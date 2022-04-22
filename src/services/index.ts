import { AzToEng, emailTypes, firstNameList, phoneProviders, surnameList, symbolList } from '../data';
import { genNum, genNumPhone } from '../utils';
import { genderTypes } from '../enums';

export class Services {
  public firstname(gender: genderTypes) {
    gender = gender ? gender : genderTypes.male;
    return firstNameList[gender][genNum(firstNameList[gender].length - 1)];
  }

  public lastname(gender: genderTypes) {
    gender = gender ? gender : genderTypes.male;
    return surnameList[gender][genNum(surnameList[gender].length - 1)];
  }

  public phone() {
    const generatePhone = '+994' + phoneProviders[genNum(phoneProviders.length - 1)] + genNumPhone();
    return generatePhone;
  }

  public getInfo(gender: genderTypes) {
    gender = gender ? gender : genderTypes.male;
    const getFirstname = this.firstname(gender);
    const getLastname = this.lastname(gender);
    const getFullname = getFirstname + getLastname;
    const convertToEnChar = this.convertAzToEnChar(getFullname.toLowerCase());
    const emailName = this.replaceSymbolRandom(convertToEnChar);
    const phone = this.phone();

    return {
      firstname: getFirstname,
      lastname: getLastname,
      email: this.generateEmail(emailName),
      username: this.replaceSymbolRandom(convertToEnChar),
      phone,
    };
  }

  readonly convertAzToEnChar = (word: string) => {
    return AzToEng(word);
  };

  readonly replaceSymbolRandom = (word: string) => {
    return word.replace(word[genNum(word.length - 3) + 1], symbolList[genNum(symbolList.length - 1)]);
  };

  readonly generateEmail = (emailName: string) => {
    return emailName + '@' + emailTypes[genNum(emailTypes.length - 1)];
  };

  public email(gender: genderTypes) {
    gender = gender ? gender : genderTypes.male;
    const getFirstname = this.firstname(gender);
    const getLastname = this.lastname(gender);
    const getFullname = getFirstname + getLastname;
    const convertToEnChar = this.convertAzToEnChar(getFullname.toLowerCase());
    const emailName = this.replaceSymbolRandom(convertToEnChar);
    return this.generateEmail(emailName);
  }
}

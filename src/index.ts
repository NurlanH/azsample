import { firstNameList, surnameList, emailTypes, symbolList, AzToEng } from './data';
import { IAzSample } from './interfaces';
import { genNum, genNumPhone } from './utils';

class AzSample implements IAzSample {
  public readonly username = () => {
    const getFirstname = this.getFirstname();
    const getLastname = this.getLastname();
    const getFullname = getFirstname + getLastname;
    const convertToEnChar = this.convertAzToEnChar(getFullname);

    return this.replaceSymbolRandom(convertToEnChar);
  };

  public readonly email = () => {
    const getFirstname = this.getFirstname();
    const getLastname = this.getLastname();
    const getFullname = getFirstname + getLastname;
    const convertToEnChar = this.convertAzToEnChar(getFullname);
    const emailName = this.replaceSymbolRandom(convertToEnChar);
    return this.generateEmail(emailName);
  };

  public readonly phone = () => {
    const phone = '+994' + genNumPhone();
    return phone;
  };

  public readonly firstname = () => {
    return firstNameList[genNum(firstNameList.length - 1)];
  };

  public readonly lastname = () => {
    return surnameList[genNum(surnameList.length - 1)];
  };

  private readonly getFirstname = () => {
    return firstNameList[genNum(firstNameList.length - 1)];
  };

  private readonly getLastname = () => {
    return surnameList[genNum(surnameList.length - 1)];
  };

  private readonly convertAzToEnChar = (word: string) => {
    return AzToEng(word);
  };

  private readonly replaceSymbolRandom = (word: string) => {
    return word.replace(word[genNum(word.length - 1)], symbolList[genNum(symbolList.length - 1)]);
  };

  private readonly generateEmail = (emailName: string) => {
    return emailName + '@' + emailTypes[genNum(emailTypes.length - 1)];
  };
}

export default new AzSample();

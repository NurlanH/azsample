import { firstNameList, surnameList, phoneProviders } from './data';
import { IAzSample } from './interfaces';
import { Services } from './services';
import { genNum, genNumPhone } from './utils';

class AzSample implements IAzSample {
    /**
     *
     */
    constructor(private readonly service:Services) {

    }

  public readonly username = () => {
    const getFirstname = this.service.getFirstname();
    const getLastname = this.service.getLastname();
    const getFullname = getFirstname + getLastname;
    const convertToEnChar = this.service.convertAzToEnChar(getFullname);

    return (this.service.replaceSymbolRandom(convertToEnChar)).toLowerCase();
  };

  public readonly email = () => {
    const getFirstname = this.service.getFirstname();
    const getLastname = this.service.getLastname();
    const getFullname = getFirstname + getLastname;
    const convertToEnChar = this.service.convertAzToEnChar(getFullname);
    const emailName = this.service.replaceSymbolRandom(convertToEnChar);
    return this.service.generateEmail(emailName);
  };

  public readonly phone = () => {
    const phone = '+994' + phoneProviders[genNum(phoneProviders.length-1)] + genNumPhone();
    return phone;
  };

  public readonly firstname = () => {
    return firstNameList[genNum(firstNameList.length - 1)];
  };

  public readonly lastname = () => {
    return surnameList[genNum(surnameList.length - 1)];
  };


}

export default new AzSample(new Services());

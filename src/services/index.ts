import { AzToEng, emailTypes, firstNameList, surnameList, symbolList } from "../data";
import { genNum } from "../utils";

export class Services {
    readonly getFirstname = () => {
        return firstNameList[genNum(firstNameList.length - 1)];
    };

    readonly getLastname = () => {
        return (surnameList[genNum(surnameList.length - 1)]).toLowerCase();
    };

    readonly convertAzToEnChar = (word: string) => {
        return AzToEng(word);
    };

    readonly replaceSymbolRandom = (word: string) => {
        return word.replace(word[genNum(word.length - 3) + 1], symbolList[genNum(symbolList.length - 1)]);
    };

    readonly generateEmail = (emailName: string) => {
        return emailName + '@' + emailTypes[genNum(emailTypes.length - 1)];
    };
}
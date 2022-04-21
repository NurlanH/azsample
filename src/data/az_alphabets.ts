const alhpabets: any = {
  ə: 'e',
  ş: 'sh',
  ç: 'ch',
  ü: 'u',
  ı: 'i',
  ö: 'o',
  ğ: 'g',
  Ə: 'E',
  Ş: 'SH',
  Ç: 'CH',
  Ü: 'U',
  I: 'İ',
  Ö: 'O',
  Ğ: 'G',
};

export function AzToEng(word: string): string {
  return word
    .split('')
    .map((char: string) => {
      return alhpabets[char] || char;
    })
    .join('');
}

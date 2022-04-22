import * as AzSample from '../index';
import { genderTypes } from '../enums';

test('My Greeter', () => {
  console.log(AzSample.getInfo(genderTypes.female), AzSample.getInfo(genderTypes.male));
  expect(typeof AzSample.email(genderTypes.male)).toBe('string');
  expect(typeof AzSample.email(genderTypes.female)).toBe('string');
  expect(typeof AzSample.firstname(genderTypes.male)).toBe('string');
  expect(typeof AzSample.firstname(genderTypes.female)).toBe('string');
  expect(typeof AzSample.lastname(genderTypes.male)).toBe('string');
  expect(typeof AzSample.lastname(genderTypes.female)).toBe('string');
  expect(typeof AzSample.username(genderTypes.male)).toBe('string');
  expect(typeof AzSample.username(genderTypes.female)).toBe('string');
  expect(typeof AzSample.getInfo(genderTypes.female)).toBe('object');
  expect(typeof AzSample.getInfo(genderTypes.male)).toBe('object');

  expect(typeof AzSample.phone()).toBe('string');
});

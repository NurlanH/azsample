import * as AzSample from '../index';

test('My Greeter', () => {
  console.log(AzSample.email(), AzSample.firstname(), AzSample.lastname(), AzSample.username(), AzSample.phone());
  expect(typeof AzSample.email()).toBe('string');
  expect(typeof AzSample.firstname()).toBe('string');
  expect(typeof AzSample.lastname()).toBe('string');
  expect(typeof AzSample.username()).toBe('string');
  expect(typeof AzSample.phone()).toBe('string');
});

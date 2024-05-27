const helloWorld = require('./hello-world');

test('Return "Hello, World!"', () => {
  expect(helloWorld()).toBe('Hello, World!');
});

// useful.js

export const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

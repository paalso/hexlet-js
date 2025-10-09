import ParseError from "./ParseError.mjs";

const parseJson = (json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    throw new ParseError(e);
  }
};

const json = '{ "key": "value" }';
console.log(parseJson(json)); // { key: 'value' }

const incorrectJson = '{ key": "value" }';
console.log(parseJson(incorrectJson)); // => ParseError: Invalid JSON string

const is = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length != keys2.length)
    return false;
  for (const key of keys1) {
    if (! keys2.includes(key) || object1[key] != object2[key])
      return false;
  }
  return true;
};

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
console.log(is(company1, company2)); // false

const company3 = { name: 'Hexlet', state: 'published' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
console.log(is(company3, company4));
console.log(is(company4, company3));

const company5 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company6 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
console.log(is(company5, company6)); // true

const company7 = {};
const company8 = {};
console.log(is(company7, company8)); // true
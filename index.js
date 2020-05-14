const fistUpperCase = (str) => {
  return str.toLowerCase().replace(/(\_)[a-z]/g, L => {
    return L.replace(/_/g, '').toUpperCase();
  });
}

const rules = ['account_rule'];

rules.forEach(_item => {
  console.log(fistUpperCase(_item));
})

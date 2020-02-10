export const CURRENCY_MASK = (value) => {
  let temp = value.toString().replace(/\D/g, '');
  temp = temp.split('').reverse();
  let formatString = '';
  temp.forEach((v, i) => {
    if (i === 2) {
      formatString += ',';
    } else if ((i - 2) % 3 === 0) { formatString += '.'; }
    formatString += 'd';
  });
  temp = formatString.split('').reverse();
  return temp.map(v => (v === 'd' ? /\d/ : v));
};

export const PHONE_MASK = (rawValue) => {
  const value = rawValue.replace(/\D/g, ''); // Only numbers
  if (value.length <= 10) {
    return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }
  return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
};

export const CPF_OR_CNPJ_MASK = (rawValue) => {
  const value = rawValue.replace(/\D/g, ''); // Only numbers
  if (value.length <= 11) {
    return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]; // CPF
  }
  return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]; // CNPJ
};

export const CPF_MASK = () => (
  [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
); // CPF

export const CNPJ_MASK = () => (
  [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
); // CNPJ

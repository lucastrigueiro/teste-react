
export const validateCPF = (value) => {
  const strCPF = value.replace(/\D/g, ''); // Only numbers
  if (strCPF.length > 11) {
    return false;
  }
  let Soma = 0;
  let Resto;
  if (strCPF === '00000000000') return false;
  if (strCPF === '11111111111') return false;
  if (strCPF === '22222222222') return false;
  if (strCPF === '33333333333') return false;
  if (strCPF === '44444444444') return false;
  if (strCPF === '55555555555') return false;
  if (strCPF === '66666666666') return false;
  if (strCPF === '77777777777') return false;
  if (strCPF === '88888888888') return false;
  if (strCPF === '99999999999') return false;

  for (let i = 1; i <= 9; i += 1) Soma += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10), 10)) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i += 1) Soma += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  return !(Resto !== parseInt(strCPF.substring(10, 11), 10));
};

export const maxCharacters = (str, max) => {
  if (str.length > max) {
    return str.substring(0, max);
  }
  return str;
};


export const validateURL = (str) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
};

export const getFormattedDouble = d => Number(parseFloat(Math.round(d * 100) / 100)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const getOnlyNumbers = value => value.replace(/\D/g, '');

export const formatCPF = (cpf) => {
  const numbers = cpf.replace(/[^\d]/g, '');
  return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

// input: XXXXXXXXYYYYZZ (X, Y, Z: digits)
// output: XX.XXX.XXX/YYYY-ZZ
export const formatCnpj = (unformattedString) => {
  const input = unformattedString.toString().match(/\d/g).join('');
  if (input.length < 14) return unformattedString;
  const suffix = input.substr(input.length - 6);
  const prefix = input.substr(0, input.length - 6);
  let finalPrefix = '';
  for (let i = prefix.length - 1; i >= 0; i -= 1) {
    finalPrefix = `${prefix.charAt(i)}${finalPrefix}`;
    if (i > 0 && (prefix.length - i) % 3 === 0) finalPrefix = `.${finalPrefix}`;
  }
  const finalSuffix = `${suffix.substr(0, 4)}-${suffix.substr(4)}`;
  return `${finalPrefix}/${finalSuffix}`;
};

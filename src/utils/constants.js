export const API_URL = '';
export const INVALID_ACCESS_TOKEN_ERROR_CODE = '';
export const INVALID_REFRESH_TOKEN_ERROR_CODE = '';
export const AUTH_URL = '/authentications';
// export const ENCRYPTION_KEY = 'fIX5j4A4ga'; // for browser storage encryption
export const ENCRYPTION_KEY = 'Mn4y9tcHQM'; // for browser storage encryption
export const SERVER_URL = process.env.API_URL;
export const VERSION = `${process.env.CURRENT_VERSION}-${process.env.BUILD_NUMBER}`;

export const STATES = [
  { initials: 'AC', state: 'Acre' },
  { initials: 'AL', state: 'Alagoas' },
  { initials: 'AP', state: 'Amapá' },
  { initials: 'AM', state: 'Amazonas' },
  { initials: 'BA', state: 'Bahia' },
  { initials: 'CE', state: 'Ceará' },
  { initials: 'DF', state: 'Distrito Federal' },
  { initials: 'ES', state: 'Espírito Santo' },
  { initials: 'GO', state: 'Goiás' },
  { initials: 'MA', state: 'Maranhão' },
  { initials: 'MT', state: 'Mato Grosso' },
  { initials: 'MS', state: 'Mato Grosso do Sul' },
  { initials: 'MG', state: 'Minas Gerais' },
  { initials: 'PA', state: 'Pará' },
  { initials: 'PB', state: 'Paraíba' },
  { initials: 'PR', state: 'Paraná' },
  { initials: 'PE', state: 'Pernambuco' },
  { initials: 'PI', state: 'Piauí' },
  { initials: 'RJ', state: 'Rio de Janeiro' },
  { initials: 'RN', state: 'Rio Grande do Norte' },
  { initials: 'RS', state: 'Rio Grande do Sul' },
  { initials: 'RO', state: 'Rondônia' },
  { initials: 'RR', state: 'Roraima' },
  { initials: 'SC', state: 'Santa Catarina' },
  { initials: 'SP', state: 'São Paulo' },
  { initials: 'SE', state: 'Sergipe' },
  { initials: 'TO', state: 'Tocantins' },
];

export const WEEKDAYS = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Feriados',
];

export const MONTH_OF_THE_YEAR = {
  JANUARY: 'Janeiro',
  FEBRUARY: 'Fevereiro',
  MARCH: 'Março',
  APRIL: 'Abril',
  MAY: 'Maio',
  JUNE: 'Junho',
  JULY: 'Julho',
  AUGUST: 'Agosto',
  SEPTEMBER: 'Setembro',
  OCTOBER: 'Outubro',
  NOVEMBER: 'Novembro',
  DECEMBER: 'Dezembro',
};

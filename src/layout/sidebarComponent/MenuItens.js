import React from 'react';
import FileDocumentIcon from 'mdi-react/FileDocumentIcon';
import StoreIcon from 'mdi-react/StoreIcon';

export const menuItens = [
  {
    name: 'Grupo 1',
    visibility: ['admin'],
    icon: <StoreIcon />,
    subMenu: [
      {
        name: 'Teste 1',
        visibility: ['admin'],
        url: '/example/1',
        headerTitle: 'Página Teste 1',
      },
      {
        name: 'Teste 2',
        visibility: ['admin'],
        url: '/example/2',
        headerTitle: 'Página Teste 2',
      },
    ],
  },
  {
    name: 'Grupo 2',
    visibility: ['admin'],
    icon: <FileDocumentIcon />,
    subMenu: [
      {
        name: 'Teste 3',
        visibility: ['admin'],
        url: '/example/3',
        headerTitle: 'Página Teste 3',
      },
      {
        name: 'Teste 4',
        visibility: ['admin'],
        url: '/example/4',
        headerTitle: 'Página Teste 4',
      },
    ],
  },
];


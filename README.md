# LGPD Modal

[![npm version](https://badge.fury.io/js/lgpdmodal.svg)](https://badge.fury.io/js/lgpdmodal)

## Instalação

```sh
npm install lgpdmodal -s
```

## Como usar?

Importe a lib:

###### Módulos ES6

```js
import { lgpdModal } from 'lgpdmodal';
```

###### CommonJS

```js
const { lgpdModal } = require('lgpdmodal');
```

Inclua em sua aplicação passando alguns [parâmetros](#parâmetros):

```js
const tagmanager = `<script>...</script>`;
const analytics = `<script>...</script>`;

const lgpd = LGPDModal({
  url: '/politica-de-privacidade',
  scripts: [tagmanager, analytics],
});
```

### Parâmetros

| Parâmetro | Descrição                                    | Tipo de valor | Valor padrão                |
| --------- | -------------------------------------------- | ------------- | --------------------------- |
| url       | URL da sua página de política de privacidade | String        | '/politica-de-privacidade/' |
| scripts   | Scripts que serão carregados após aceite     | Array         |                             |

## Licença

[MIT](/LICENSE) &copy; Kevin Oliveira

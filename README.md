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
import { LGPDModal } from 'lgpdmodal';
```

###### CommonJS

```js
const { LGPDModal } = require('lgpdmodal');
```

Inclua em sua aplicação passando alguns [parâmetros](#parâmetros):

```js
const tagmanager = `<script>...</script>`;
const analytics = `<script>...</script>`;

LGPDModal({
  url: '/politica-de-privacidade',
  scripts: [tagmanager, analytics],
});
```

Importe o CSS base, caso queira, em sua aplicação:

```html
<link rel="stylesheet" href="LGPDModal.css" />
```

### Parâmetros

| Parâmetro | Descrição                                    | Tipo de valor | Valor padrão                |
| --------- | -------------------------------------------- | ------------- | --------------------------- |
| url       | URL da sua página de política de privacidade | String        | '/politica-de-privacidade/' |
| scripts   | Scripts que serão carregados após aceite     | Array         |                             |

## Licença

[MIT](/LICENSE) &copy; Kevin Oliveira

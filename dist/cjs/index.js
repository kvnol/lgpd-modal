'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const template = (acceptPolicy, url) => `
  <div class="modal-lgpd ${acceptPolicy ? '' : '-show'}">
    <div class="bg"></div>
    <div class="dialog">
      <h4 class="title">Configuração de Cookies:</h4>
      <p class="description">Usamos cookies para lhe oferecer uma experiência de navegação melhor, analisar o tráfego do site e personalizar o conteúdo. Para saber mais sobre cookies acesse nossa <a href="${url}" target="_blank" title="Acesse a página com informações de privacidade">Política de Privacidade</a>. Para aceitar, clique no botão "aceitar cookies".</p>

      <div class="actions">
        <button
          class="button"
          data-cookies="accept"
        >
          <span>Aceitar cookies</span>
        </button>
      </div>
    </div>
  </div>
`;

const defaults = {
  acceptPolicy: window.localStorage.getItem('acceptPolicy'),
  url: '/politica-de-privacidade/',
};

const includeScripts = (scripts) => {
  if (defaults.acceptPolicy) {
    scripts.forEach((script) => {
      document.head.insertAdjacentHTML('beforeend', script);
    });
  }
};

const onAccept = (scripts) => {
  const $modal = document.querySelector('.modal-lgpd');
  const $button = document.querySelector('[data-cookies="accept"]');

  $button?.addEventListener('click', () => {
    window.localStorage.setItem('acceptPolicy', true);

    $modal?.classList.remove('-show');

    if (scripts) {
      includeScripts(scripts);
    }
  });
};

const initModal = (options) => {
  const $root = document.body;

  const $dialog = template(defaults.acceptPolicy, options?.url);

  if (!defaults.acceptPolicy) {
    $root.insertAdjacentHTML('beforeend', $dialog);
    onAccept(options?.scripts);
  }
};

const LGPDModal = (options) => {
  initModal(options);
};

exports.LGPDModal = LGPDModal;
//# sourceMappingURL=index.js.map

import template from './modules/template';

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

/* eslint-disable import/prefer-default-export */
export { LGPDModal };

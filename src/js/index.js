import template from './modules/template';

class LGPDModal {
  /**
   * LGPDModal Constructor
   * @constructor LGPDModal
   */
  constructor(options) {
    this.initModal(options);
  }

  initModal(options) {
    this.$root = document.body;
    const acceptPolicy = !!window.localStorage.getItem('acceptPolicy');

    const $dialog = template(acceptPolicy, options.url);

    if (!acceptPolicy) {
      this.$root.insertAdjacentHTML('beforeend', $dialog);
      this.onAccept(options.scripts);
    }
  }

  onAccept(scripts) {
    const $modal = document.querySelector('.modal-lgpd');
    const $button = document.querySelector('[data-cookies="accept"]');

    $button?.addEventListener('click', () => {
      window.localStorage.setItem('acceptPolicy', true);

      $modal?.classList.remove('-show');

      if (scripts) {
        this.includeScripts(scripts);
      }
    });
  }

  includeScripts(scripts) {
    if (this.acceptPolicy) {
      scripts.forEach((script) => {
        document.head.insertAdjacentHTML('beforeend', script);
      });
    }
  }
}

export default LGPDModal;

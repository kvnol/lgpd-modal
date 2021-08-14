const onAccept = (scripts: any = []) => {
  const $modal = document.querySelector('.modal-lgpd');
  const $button = document.querySelector('[data-cookies="accept"]');

  $button?.addEventListener('click', () => {
    window.localStorage.setItem('acceptPolicy', 'true');
    $modal?.classList.remove('-show');

    includeScripts(scripts);
  });
};

const includeScripts = (scripts: any = []) => {
  if (!!window.localStorage.getItem('acceptPolicy')) {
    scripts.forEach((script: string) => {
      document.head.insertAdjacentHTML('beforeend', script);
    });
  }
};

export { onAccept };

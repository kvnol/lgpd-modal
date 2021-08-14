import { onAccept } from './modules/events';
import modal from './modules/modal';

const lgpdModal = (scripts: any, url: string) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    modal(!!window.localStorage.getItem('acceptPolicy'), url)
  );
  onAccept(scripts);
};

export default lgpdModal;

import { onAccept } from './modules/events';
import modal from './modules/modal';

const lgpdModal = (scripts: any = []) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    modal(!!window.localStorage.getItem('acceptPolicy'))
  );
  onAccept(scripts);
};

export default lgpdModal;

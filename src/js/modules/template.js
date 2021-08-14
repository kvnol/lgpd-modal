const template = (acceptPolicy, url) => `
  <div class="modal-lgpd ${acceptPolicy ? '' : '-show'}">
    <div class="bg"></div>
    <div class="dialog">
      <h4 class="title">Configuração de Cookies:</h4>
      <p class="description">Usamos cookies para lhe oferecer uma experiência de navegação melhor, analisar o tráfego do site e personalizar o conteúdo. Para saber mais sobre cookies acesse nossa <a href="${url}" target="_blank" title="Acesse a página com informações de privacidade">Política de Privacidade</a>. Para aceitar, clique no botão "aceitar cookies".</p>

      <div class="actions">
        <button
          class="button -filled"
          data-cookies="accept"
        >
          <span>Aceitar cookies</span>
        </button>
      </div>
    </div>
  </div>
`;

export default template;

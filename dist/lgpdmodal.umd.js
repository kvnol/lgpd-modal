(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LGPDModal = global.LGPDModal || {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var template = function template(acceptPolicy, url) {
    return "\n  <div class=\"modal-lgpd ".concat(acceptPolicy ? '' : '-show', "\">\n    <div class=\"bg\"></div>\n    <div class=\"dialog\">\n      <h4 class=\"title\">Configura\xE7\xE3o de Cookies:</h4>\n      <p class=\"description\">Usamos cookies para lhe oferecer uma experi\xEAncia de navega\xE7\xE3o melhor, analisar o tr\xE1fego do site e personalizar o conte\xFAdo. Para saber mais sobre cookies acesse nossa <a href=\"").concat(url || '/politica-de-privacidade/', "\" target=\"_blank\" title=\"Acesse a p\xE1gina com informa\xE7\xF5es de privacidade\">Pol\xEDtica de Privacidade</a>. Para aceitar, clique no bot\xE3o \"aceitar cookies\".</p>\n\n      <div class=\"actions\">\n        <button\n          class=\"button -filled\"\n          data-cookies=\"accept\"\n        >\n          <span>Aceitar cookies</span>\n        </button>\n      </div>\n    </div>\n  </div>\n");
  };

  var LGPDModal = /*#__PURE__*/function () {
    /**
     * LGPDModal Constructor
     * @constructor LGPDModal
     */
    function LGPDModal(options) {
      _classCallCheck(this, LGPDModal);

      this.initModal(options);
    }

    _createClass(LGPDModal, [{
      key: "initModal",
      value: function initModal(options) {
        this.$root = document.body;
        var acceptPolicy = !!window.localStorage.getItem('acceptPolicy');
        var $dialog = template(acceptPolicy, options.url);

        if (!acceptPolicy) {
          this.$root.insertAdjacentHTML('beforeend', $dialog);
          this.onAccept(options.scripts);
        }
      }
    }, {
      key: "onAccept",
      value: function onAccept(scripts) {
        var _this = this;

        var $modal = document.querySelector('.modal-lgpd');
        var $button = document.querySelector('[data-cookies="accept"]');
        $button === null || $button === void 0 ? void 0 : $button.addEventListener('click', function () {
          window.localStorage.setItem('acceptPolicy', true);
          $modal === null || $modal === void 0 ? void 0 : $modal.classList.remove('-show');

          if (scripts) {
            _this.includeScripts(scripts);
          }
        });
      }
    }, {
      key: "includeScripts",
      value: function includeScripts(scripts) {
        if (this.acceptPolicy) {
          scripts.forEach(function (script) {
            document.head.insertAdjacentHTML('beforeend', script);
          });
        }
      }
    }]);

    return LGPDModal;
  }();

  exports['default'] = LGPDModal;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

const lgpd = () => {
  var $wrapper = $('[data-cookies="modal"]');
  var $btn = $('[data-cookies="accept"]');
  // var tagmanagercode =
  //   "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WDW54K6');";

  $btn.on('click', function (e) {
    window.localStorage.setItem('acceptAll', true);
    addCode();
  });

  var addCode = function () {
    if (!!window.localStorage.getItem('acceptAll')) {
      $wrapper.remove();
      // $('head').append(
      //   "<script id='tagmanager'>" + tagmanagercode + '</script>'
      // );
    }
  };

  addCode();
};

lgpd();

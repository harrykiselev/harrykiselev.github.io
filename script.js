// код гугл аналитики

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-66099824-1', 'auto');
ga('send', 'pageview');

// код страницы
window.onload = function(){

  // функция изменения языка на сайте
  var changeLanguage = function(choosenLanguage) {
    // скрываем ненужную секцию информации
    var closingTabLanguage = (choosenLanguage == 'ru') ? 'en' : 'ru';
    document.getElementById(closingTabLanguage).style.display = 'none';
    // показываем нужную секцию информации
    document.getElementById(choosenLanguage).style.display = 'inline-block';
  }

  // открываем таб с нужным языком
  // проверяем есть ли что нибудь в хэшэ адреса (после решетки)
  // http://harrykiselev.github.io/index.html#en
  if (window.location.hash) {
    var languageName = window.location.hash.substr(1)
    changeLanguage(languageName)
  } else {
    // сюда попадаем, если нет ничего после решетки
    // начинаем проверять доступные языки в браузере
    // если в доступных языках есть русский - то отображаем соответствующий таб
    if ( navigator.languages.indexOf('ru') >= 0 ) {
      // включаем режим для русскоязычных людей
      changeLanguage('ru')
    } else {
      // включаем режим для всех остальных землян
      changeLanguage('en')
    }
  }

  // обрабатываем панель переключения языков
  var languageItems = document.getElementsByClassName('intro__language-pane__item__link')
  for (var i = 0; i < languageItems.length; i++) {
    var item = languageItems[i];
    item.addEventListener( 'click', function() {
      // получаем язык, который нужен пользователю
      var choosenLanguage = this.getAttribute('data-language');
      changeLanguage(choosenLanguage)
    }, false);
  }

}

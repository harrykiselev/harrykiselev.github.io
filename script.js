(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-66099824-1', 'auto');
ga('send', 'pageview');

window.onload = function(){
  var changeLanguage = function(e) {
    choosenLanguage = this.getAttribute('data-language')
    introSections = document.getElementsByClassName('intro')
    for (var i = 0; i < introSections.length; i++) {
      var section = introSections[i];
      section.style.display = 'none'
    }
    visibleBlock = document.getElementById(choosenLanguage);
    visibleBlock.style.display = 'inline-block';
    e.preventDefault();
  }

  var languageItems = document.getElementsByClassName('intro__language-pane__item__link')
  for (var i = 0; i < languageItems.length; i++) {
    var item = languageItems[i];
    item.addEventListener('click', changeLanguage, false);
  }
}

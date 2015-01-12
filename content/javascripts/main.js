$(document).ready(function() {
  $("a.obfuscated-address").each(function(i, element) {
    var deobfuscated = atob($(element).attr('data-obfuscated-address').split('').reverse().join(''));
    $(element).attr('href', 'mailto:' + deobfuscated);
  });

  $("a.fancybox").fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    minHeight   : 5,
    autoSize    : false,
    fitToView   : false,
    autoResize  : false,
    helpers     : {
      title : {
        type : 'inside'
      }
    }
  });
});

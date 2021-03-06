<!DOCTYPE HTML>
<html>

<head>
<meta charset="utf-8">
  </head>

  <body>

  <script>
  function addScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(script, s);

    var loaded = false;

    function onload() {
      if (loaded) return; // повторный вызов
      loaded = true;
      callback();
    }

    script.onload = onload; // все браузеры, IE с версии 9

    script.onreadystatechange = function() { // IE8-
      if (this.readyState == 'loaded' || this.readyState == 'complete') {
        setTimeout(onload, 0);
      }
    };

  }

addScript("go.js", function() {
  go();
});
</script>

</body>

</html>
<!DOCTYPE HTML>
<html>

<head>
<meta charset="utf-8">
  </head>

  <body>

  <script>
  function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(script, s);
    return script;
  }

function addScripts(scripts, callback) {
  var loaded = {}; // Для загруженных файлов loaded[i] = true
  var counter = 0;

  function onload(i) {
    if (loaded[i]) return; // лишний вызов onload/onreadystatechange
    loaded[i] = true;
    counter++;
    if (counter == scripts.length) callback();
  }

  for (var i = 0; i < scripts.length; i++)(function(i) {
    var script = addScript(scripts[i]);

    script.onload = function() {
      onload(i);
    };

    script.onreadystatechange = function() { // IE8-
      if (this.readyState == 'loaded' || this.readyState == 'complete') {
        setTimeout(this.onload, 0); // возможны повторные вызовы onload
      }
    };

  }(i));

}

addScripts(["a.js", "b.js", "c.js"], function() {
  a()
});
</script>

</body>

</html>
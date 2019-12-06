import Vue from "vue";

function loadScript(src, callback) {
  var script = document.createElement('script'),
    head = document.getElementsByTagName('head')[0];
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.src = src;
  if (script.addEventListener) {
    script.addEventListener('load', function () {
      callback();
    }, false);
  } else if (script.attachEvent) {
    script.attachEvent('onreadystatechange', function () {
      var target = window.event.srcElement;
      if (target.readyState == 'loaded') {
        callback();
      }
    });
  }
  head.appendChild(script);
}

function initQuill() {
  // console.log(window.Quill.imports)
  // let ColorClass = window.Quill.import('attributors/class/color');
  let SizeStyle = window.Quill.import('attributors/style/size');
  let AlignStyle = window.Quill.import('attributors/style/align');
  SizeStyle.whitelist = ['12px', '14px', '16px', '18px', '20px','24px', '36px', '48px', '64px'];
  // window.Quill.register(ColorClass, true);
  window.Quill.register(SizeStyle, true);
  window.Quill.register(AlignStyle, true);

  Vue.use(window.VueQuillEditor)
}

if (window.Quill) {
  if (window.VueQuillEditor) {
    initQuill()
  }else{
    loadScript('https://cdn.jsdelivr.net/npm/vue-quill-editor@3.0.6/dist/vue-quill-editor.min.js', () => {
      initQuill()
    });
  }
} else {
  loadScript('https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.min.js', () => {
    loadScript('https://cdn.jsdelivr.net/npm/vue-quill-editor@3.0.6/dist/vue-quill-editor.min.js', () => {
      initQuill()
    });
  });
}

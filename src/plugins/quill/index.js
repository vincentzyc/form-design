import Vue from "vue";
import Quill from 'quill'
import VueQuillEditor from 'vue-quill-editor'

import TextBold from './text-bold';

// console.log(Quill.imports)

// let ColorClass = window.Quill.import('attributors/class/color');

let SizeStyle = Quill.import('attributors/style/size');
let AlignStyle = Quill.import('attributors/style/align');


// let IndentStyle = window.Quill.import('formats/indent');
// IndentStyle.keyName = 'text-indent';
// IndentStyle.whitelist = ['1em', '2em', '3em', '4em', '5em','6em', '7em', '8em'];
SizeStyle.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '36px', '48px', '64px'];

// window.Quill.register(ColorClass, true);
Quill.register(SizeStyle, true);
Quill.register(AlignStyle, true);
Quill.register("formats/bold", TextBold, true);

Vue.use(VueQuillEditor)


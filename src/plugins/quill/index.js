import Vue from "vue";
import Quill from 'quill'
import VueQuillEditor from 'vue-quill-editor'

import TextIndent from './text-indent';
import LineHeight from './line-height';


let SizeStyle = Quill.import('attributors/style/size');
let AlignStyle = Quill.import('attributors/style/align');

SizeStyle.whitelist = ['8px', '10px', '12px', '14px', '16px', '18px', '20px', '24px', '36px', '48px', '64px'];

Quill.register(SizeStyle, true);
Quill.register(AlignStyle, true);
Quill.register("formats/textIndent", TextIndent, true);
Quill.register("formats/lineHeight", LineHeight, true);

Vue.use(VueQuillEditor)


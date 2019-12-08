import Quill from 'quill'
const Parchment = Quill.import("parchment");

class IndentStyleAttributor extends Parchment.Attributor.Style {
  value(domNode) {
    let value = super.value(domNode);
    return value;
  }

  add(node,value) {
    node.style.textIndent = value
    return true;
  }
  remove(node) {
    node.style.textIndent = '';
  }
}
let IndentStyle = new IndentStyleAttributor('indent', 'text-indent', {
  scope: Parchment.Scope.BLOCK,
  whitelist: ['1em', '2em','3em','4em','5em','6em','7em','8em']
});

export default IndentStyle;
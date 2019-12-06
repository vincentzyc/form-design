import Quill from 'quill'
const Parchment = Quill.import("parchment");

class BoldStyleAttributor extends Parchment.Attributor.Style {
  value(domNode) {
    let value = super.value(domNode);
    return value;
  }

  add(node) {
    node.style.fontWeight = 'bold'
    return true;
  }
  remove(node) {
    node.style.fontWeight = 'normal';
  }
}
let BoldStyle = new BoldStyleAttributor('bold', 'font-weight', {
  scope: Parchment.Scope.INLINE,
  whitelist: [true, false]
});

export default BoldStyle;
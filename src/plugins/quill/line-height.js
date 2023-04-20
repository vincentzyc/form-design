import Quill from 'quill';
const Parchment = Quill.import('parchment');

class lineHeightAttributor extends Parchment.Attributor.Style {}

const lineHeightStyle = new lineHeightAttributor('lineHeight', 'line-height', {
  scope: Parchment.Scope.INLINE,
  whitelist: ['1', '1.25', '1.5', '1.75', '2', '3'],
});

export default lineHeightStyle;

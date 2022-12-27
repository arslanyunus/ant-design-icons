// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementEqualBoldSvg from '@ant-design/icons-svg/lib/asn/ElementEqualBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementEqualBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementEqualBold: ElementEqualBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementEqualBoldSvg}></AntdIcon>;
};

ElementEqualBold.displayName = 'ElementEqualBold';
ElementEqualBold.inheritAttrs = false;
export default ElementEqualBold;
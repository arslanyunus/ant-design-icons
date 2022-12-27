// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementEqualBrokenSvg from '@ant-design/icons-svg/lib/asn/ElementEqualBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementEqualBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementEqualBroken: ElementEqualBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementEqualBrokenSvg}></AntdIcon>;
};

ElementEqualBroken.displayName = 'ElementEqualBroken';
ElementEqualBroken.inheritAttrs = false;
export default ElementEqualBroken;
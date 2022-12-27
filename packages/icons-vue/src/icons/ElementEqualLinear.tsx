// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementEqualLinearSvg from '@ant-design/icons-svg/lib/asn/ElementEqualLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementEqualLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementEqualLinear: ElementEqualLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementEqualLinearSvg}></AntdIcon>;
};

ElementEqualLinear.displayName = 'ElementEqualLinear';
ElementEqualLinear.inheritAttrs = false;
export default ElementEqualLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementPlusLinearSvg from '@ant-design/icons-svg/lib/asn/ElementPlusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementPlusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementPlusLinear: ElementPlusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementPlusLinearSvg}></AntdIcon>;
};

ElementPlusLinear.displayName = 'ElementPlusLinear';
ElementPlusLinear.inheritAttrs = false;
export default ElementPlusLinear;
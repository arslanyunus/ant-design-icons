// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldTickLinearSvg from '@ant-design/icons-svg/lib/asn/ShieldTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldTickLinear: ShieldTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldTickLinearSvg}></AntdIcon>;
};

ShieldTickLinear.displayName = 'ShieldTickLinear';
ShieldTickLinear.inheritAttrs = false;
export default ShieldTickLinear;
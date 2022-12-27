// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldTickBrokenSvg from '@ant-design/icons-svg/lib/asn/ShieldTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldTickBroken: ShieldTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldTickBrokenSvg}></AntdIcon>;
};

ShieldTickBroken.displayName = 'ShieldTickBroken';
ShieldTickBroken.inheritAttrs = false;
export default ShieldTickBroken;
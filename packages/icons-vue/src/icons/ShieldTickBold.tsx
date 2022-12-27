// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldTickBoldSvg from '@ant-design/icons-svg/lib/asn/ShieldTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldTickBold: ShieldTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldTickBoldSvg}></AntdIcon>;
};

ShieldTickBold.displayName = 'ShieldTickBold';
ShieldTickBold.inheritAttrs = false;
export default ShieldTickBold;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShieldTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldTickTwoTone: ShieldTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldTickTwoToneSvg}></AntdIcon>;
};

ShieldTickTwoTone.displayName = 'ShieldTickTwoTone';
ShieldTickTwoTone.inheritAttrs = false;
export default ShieldTickTwoTone;
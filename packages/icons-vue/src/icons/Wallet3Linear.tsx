// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet3LinearSvg from '@ant-design/icons-svg/lib/asn/Wallet3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet3Linear: Wallet3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet3LinearSvg}></AntdIcon>;
};

Wallet3Linear.displayName = 'Wallet3Linear';
Wallet3Linear.inheritAttrs = false;
export default Wallet3Linear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet1LinearSvg from '@ant-design/icons-svg/lib/asn/Wallet1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet1Linear: Wallet1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet1LinearSvg}></AntdIcon>;
};

Wallet1Linear.displayName = 'Wallet1Linear';
Wallet1Linear.inheritAttrs = false;
export default Wallet1Linear;
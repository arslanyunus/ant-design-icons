// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet1BoldSvg from '@ant-design/icons-svg/lib/asn/Wallet1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet1Bold: Wallet1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet1BoldSvg}></AntdIcon>;
};

Wallet1Bold.displayName = 'Wallet1Bold';
Wallet1Bold.inheritAttrs = false;
export default Wallet1Bold;
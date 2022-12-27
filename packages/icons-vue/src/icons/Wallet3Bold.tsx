// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet3BoldSvg from '@ant-design/icons-svg/lib/asn/Wallet3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet3Bold: Wallet3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet3BoldSvg}></AntdIcon>;
};

Wallet3Bold.displayName = 'Wallet3Bold';
Wallet3Bold.inheritAttrs = false;
export default Wallet3Bold;
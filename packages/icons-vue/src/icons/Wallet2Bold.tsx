// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet2BoldSvg from '@ant-design/icons-svg/lib/asn/Wallet2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet2Bold: Wallet2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet2BoldSvg}></AntdIcon>;
};

Wallet2Bold.displayName = 'Wallet2Bold';
Wallet2Bold.inheritAttrs = false;
export default Wallet2Bold;
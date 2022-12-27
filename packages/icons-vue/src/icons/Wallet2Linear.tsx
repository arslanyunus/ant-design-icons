// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet2LinearSvg from '@ant-design/icons-svg/lib/asn/Wallet2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet2Linear: Wallet2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet2LinearSvg}></AntdIcon>;
};

Wallet2Linear.displayName = 'Wallet2Linear';
Wallet2Linear.inheritAttrs = false;
export default Wallet2Linear;
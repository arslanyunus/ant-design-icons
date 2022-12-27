// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet2BrokenSvg from '@ant-design/icons-svg/lib/asn/Wallet2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet2Broken: Wallet2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet2BrokenSvg}></AntdIcon>;
};

Wallet2Broken.displayName = 'Wallet2Broken';
Wallet2Broken.inheritAttrs = false;
export default Wallet2Broken;
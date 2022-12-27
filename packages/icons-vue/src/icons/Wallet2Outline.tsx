// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet2OutlineSvg from '@ant-design/icons-svg/lib/asn/Wallet2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet2Outline: Wallet2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet2OutlineSvg}></AntdIcon>;
};

Wallet2Outline.displayName = 'Wallet2Outline';
Wallet2Outline.inheritAttrs = false;
export default Wallet2Outline;
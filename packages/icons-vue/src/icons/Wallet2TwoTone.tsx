// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Wallet2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet2TwoTone: Wallet2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet2TwoToneSvg}></AntdIcon>;
};

Wallet2TwoTone.displayName = 'Wallet2TwoTone';
Wallet2TwoTone.inheritAttrs = false;
export default Wallet2TwoTone;
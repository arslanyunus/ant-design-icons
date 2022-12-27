// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Wallet1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet1TwoTone: Wallet1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet1TwoToneSvg}></AntdIcon>;
};

Wallet1TwoTone.displayName = 'Wallet1TwoTone';
Wallet1TwoTone.inheritAttrs = false;
export default Wallet1TwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Wallet3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet3TwoTone: Wallet3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet3TwoToneSvg}></AntdIcon>;
};

Wallet3TwoTone.displayName = 'Wallet3TwoTone';
Wallet3TwoTone.inheritAttrs = false;
export default Wallet3TwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Coin1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Coin1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Coin1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Coin1TwoTone: Coin1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Coin1TwoToneSvg}></AntdIcon>;
};

Coin1TwoTone.displayName = 'Coin1TwoTone';
Coin1TwoTone.inheritAttrs = false;
export default Coin1TwoTone;
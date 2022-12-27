// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Coin1OutlineSvg from '@ant-design/icons-svg/lib/asn/Coin1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Coin1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Coin1Outline: Coin1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Coin1OutlineSvg}></AntdIcon>;
};

Coin1Outline.displayName = 'Coin1Outline';
Coin1Outline.inheritAttrs = false;
export default Coin1Outline;
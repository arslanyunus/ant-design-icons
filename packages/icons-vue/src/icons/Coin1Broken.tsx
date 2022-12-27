// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Coin1BrokenSvg from '@ant-design/icons-svg/lib/asn/Coin1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Coin1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Coin1Broken: Coin1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Coin1BrokenSvg}></AntdIcon>;
};

Coin1Broken.displayName = 'Coin1Broken';
Coin1Broken.inheritAttrs = false;
export default Coin1Broken;
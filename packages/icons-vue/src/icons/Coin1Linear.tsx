// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Coin1LinearSvg from '@ant-design/icons-svg/lib/asn/Coin1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Coin1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Coin1Linear: Coin1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Coin1LinearSvg}></AntdIcon>;
};

Coin1Linear.displayName = 'Coin1Linear';
Coin1Linear.inheritAttrs = false;
export default Coin1Linear;
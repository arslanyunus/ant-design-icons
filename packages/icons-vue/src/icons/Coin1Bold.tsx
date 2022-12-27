// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Coin1BoldSvg from '@ant-design/icons-svg/lib/asn/Coin1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Coin1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Coin1Bold: Coin1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Coin1BoldSvg}></AntdIcon>;
};

Coin1Bold.displayName = 'Coin1Bold';
Coin1Bold.inheritAttrs = false;
export default Coin1Bold;
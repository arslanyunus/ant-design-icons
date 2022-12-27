// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet1BrokenSvg from '@ant-design/icons-svg/lib/asn/Wallet1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet1Broken: Wallet1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet1BrokenSvg}></AntdIcon>;
};

Wallet1Broken.displayName = 'Wallet1Broken';
Wallet1Broken.inheritAttrs = false;
export default Wallet1Broken;
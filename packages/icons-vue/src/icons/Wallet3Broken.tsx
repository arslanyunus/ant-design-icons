// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet3BrokenSvg from '@ant-design/icons-svg/lib/asn/Wallet3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet3Broken: Wallet3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet3BrokenSvg}></AntdIcon>;
};

Wallet3Broken.displayName = 'Wallet3Broken';
Wallet3Broken.inheritAttrs = false;
export default Wallet3Broken;
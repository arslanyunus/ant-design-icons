// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet1OutlineSvg from '@ant-design/icons-svg/lib/asn/Wallet1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet1Outline: Wallet1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet1OutlineSvg}></AntdIcon>;
};

Wallet1Outline.displayName = 'Wallet1Outline';
Wallet1Outline.inheritAttrs = false;
export default Wallet1Outline;
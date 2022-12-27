// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet3OutlineSvg from '@ant-design/icons-svg/lib/asn/Wallet3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet3Outline: Wallet3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet3OutlineSvg}></AntdIcon>;
};

Wallet3Outline.displayName = 'Wallet3Outline';
Wallet3Outline.inheritAttrs = false;
export default Wallet3Outline;
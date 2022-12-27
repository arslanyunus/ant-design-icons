// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GiftLinearSvg from '@ant-design/icons-svg/lib/asn/GiftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GiftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GiftLinear: GiftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftLinearSvg}></AntdIcon>;
};

GiftLinear.displayName = 'GiftLinear';
GiftLinear.inheritAttrs = false;
export default GiftLinear;
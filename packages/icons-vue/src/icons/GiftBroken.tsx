// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GiftBrokenSvg from '@ant-design/icons-svg/lib/asn/GiftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GiftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GiftBroken: GiftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftBrokenSvg}></AntdIcon>;
};

GiftBroken.displayName = 'GiftBroken';
GiftBroken.inheritAttrs = false;
export default GiftBroken;
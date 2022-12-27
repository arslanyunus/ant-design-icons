// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GiftBoldSvg from '@ant-design/icons-svg/lib/asn/GiftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GiftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GiftBold: GiftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftBoldSvg}></AntdIcon>;
};

GiftBold.displayName = 'GiftBold';
GiftBold.inheritAttrs = false;
export default GiftBold;
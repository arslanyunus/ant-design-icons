// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GiftOutlineSvg from '@ant-design/icons-svg/lib/asn/GiftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GiftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GiftOutline: GiftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftOutlineSvg}></AntdIcon>;
};

GiftOutline.displayName = 'GiftOutline';
GiftOutline.inheritAttrs = false;
export default GiftOutline;
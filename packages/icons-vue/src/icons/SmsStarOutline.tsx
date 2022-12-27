// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsStarOutlineSvg from '@ant-design/icons-svg/lib/asn/SmsStarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsStarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsStarOutline: SmsStarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsStarOutlineSvg}></AntdIcon>;
};

SmsStarOutline.displayName = 'SmsStarOutline';
SmsStarOutline.inheritAttrs = false;
export default SmsStarOutline;
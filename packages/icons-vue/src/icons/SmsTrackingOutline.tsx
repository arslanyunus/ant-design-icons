// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsTrackingOutlineSvg from '@ant-design/icons-svg/lib/asn/SmsTrackingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsTrackingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsTrackingOutline: SmsTrackingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsTrackingOutlineSvg}></AntdIcon>;
};

SmsTrackingOutline.displayName = 'SmsTrackingOutline';
SmsTrackingOutline.inheritAttrs = false;
export default SmsTrackingOutline;
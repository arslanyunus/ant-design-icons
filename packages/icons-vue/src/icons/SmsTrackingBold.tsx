// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsTrackingBoldSvg from '@ant-design/icons-svg/lib/asn/SmsTrackingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsTrackingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsTrackingBold: SmsTrackingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsTrackingBoldSvg}></AntdIcon>;
};

SmsTrackingBold.displayName = 'SmsTrackingBold';
SmsTrackingBold.inheritAttrs = false;
export default SmsTrackingBold;
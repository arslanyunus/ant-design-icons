// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsTrackingBrokenSvg from '@ant-design/icons-svg/lib/asn/SmsTrackingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsTrackingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsTrackingBroken: SmsTrackingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsTrackingBrokenSvg}></AntdIcon>;
};

SmsTrackingBroken.displayName = 'SmsTrackingBroken';
SmsTrackingBroken.inheritAttrs = false;
export default SmsTrackingBroken;
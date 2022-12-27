// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsTrackingTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmsTrackingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsTrackingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsTrackingTwoTone: SmsTrackingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsTrackingTwoToneSvg}></AntdIcon>;
};

SmsTrackingTwoTone.displayName = 'SmsTrackingTwoTone';
SmsTrackingTwoTone.inheritAttrs = false;
export default SmsTrackingTwoTone;
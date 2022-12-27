// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsTrackingLinearSvg from '@ant-design/icons-svg/lib/asn/SmsTrackingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsTrackingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsTrackingLinear: SmsTrackingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsTrackingLinearSvg}></AntdIcon>;
};

SmsTrackingLinear.displayName = 'SmsTrackingLinear';
SmsTrackingLinear.inheritAttrs = false;
export default SmsTrackingLinear;
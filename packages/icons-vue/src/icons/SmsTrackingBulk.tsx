// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsTrackingBulkSvg from '@ant-design/icons-svg/lib/asn/SmsTrackingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsTrackingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsTrackingBulk: SmsTrackingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsTrackingBulkSvg}></AntdIcon>;
};

SmsTrackingBulk.displayName = 'SmsTrackingBulk';
SmsTrackingBulk.inheritAttrs = false;
export default SmsTrackingBulk;
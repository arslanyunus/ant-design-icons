// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsNotificationBulkSvg from '@ant-design/icons-svg/lib/asn/SmsNotificationBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsNotificationBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsNotificationBulk: SmsNotificationBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsNotificationBulkSvg}></AntdIcon>;
};

SmsNotificationBulk.displayName = 'SmsNotificationBulk';
SmsNotificationBulk.inheritAttrs = false;
export default SmsNotificationBulk;
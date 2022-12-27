// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsNotificationBrokenSvg from '@ant-design/icons-svg/lib/asn/SmsNotificationBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsNotificationBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsNotificationBroken: SmsNotificationBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsNotificationBrokenSvg}></AntdIcon>;
};

SmsNotificationBroken.displayName = 'SmsNotificationBroken';
SmsNotificationBroken.inheritAttrs = false;
export default SmsNotificationBroken;
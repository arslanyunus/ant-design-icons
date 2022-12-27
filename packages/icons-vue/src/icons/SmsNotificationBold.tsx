// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsNotificationBoldSvg from '@ant-design/icons-svg/lib/asn/SmsNotificationBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsNotificationBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsNotificationBold: SmsNotificationBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsNotificationBoldSvg}></AntdIcon>;
};

SmsNotificationBold.displayName = 'SmsNotificationBold';
SmsNotificationBold.inheritAttrs = false;
export default SmsNotificationBold;
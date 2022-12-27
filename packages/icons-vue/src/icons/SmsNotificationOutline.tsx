// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsNotificationOutlineSvg from '@ant-design/icons-svg/lib/asn/SmsNotificationOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsNotificationOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsNotificationOutline: SmsNotificationOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsNotificationOutlineSvg}></AntdIcon>;
};

SmsNotificationOutline.displayName = 'SmsNotificationOutline';
SmsNotificationOutline.inheritAttrs = false;
export default SmsNotificationOutline;
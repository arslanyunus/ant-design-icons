// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsNotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmsNotificationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsNotificationTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsNotificationTwoTone: SmsNotificationTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsNotificationTwoToneSvg}></AntdIcon>;
};

SmsNotificationTwoTone.displayName = 'SmsNotificationTwoTone';
SmsNotificationTwoTone.inheritAttrs = false;
export default SmsNotificationTwoTone;
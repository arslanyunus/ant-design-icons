// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsNotificationLinearSvg from '@ant-design/icons-svg/lib/asn/SmsNotificationLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsNotificationLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsNotificationLinear: SmsNotificationLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsNotificationLinearSvg}></AntdIcon>;
};

SmsNotificationLinear.displayName = 'SmsNotificationLinear';
SmsNotificationLinear.inheritAttrs = false;
export default SmsNotificationLinear;
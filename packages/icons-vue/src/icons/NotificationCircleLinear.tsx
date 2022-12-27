// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationCircleLinearSvg from '@ant-design/icons-svg/lib/asn/NotificationCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationCircleLinear: NotificationCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationCircleLinearSvg}></AntdIcon>;
};

NotificationCircleLinear.displayName = 'NotificationCircleLinear';
NotificationCircleLinear.inheritAttrs = false;
export default NotificationCircleLinear;
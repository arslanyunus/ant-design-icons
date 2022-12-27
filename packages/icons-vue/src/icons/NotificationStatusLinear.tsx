// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationStatusLinearSvg from '@ant-design/icons-svg/lib/asn/NotificationStatusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationStatusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationStatusLinear: NotificationStatusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationStatusLinearSvg}></AntdIcon>;
};

NotificationStatusLinear.displayName = 'NotificationStatusLinear';
NotificationStatusLinear.inheritAttrs = false;
export default NotificationStatusLinear;
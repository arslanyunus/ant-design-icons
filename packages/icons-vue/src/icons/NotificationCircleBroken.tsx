// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/NotificationCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationCircleBroken: NotificationCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationCircleBrokenSvg}></AntdIcon>;
};

NotificationCircleBroken.displayName = 'NotificationCircleBroken';
NotificationCircleBroken.inheritAttrs = false;
export default NotificationCircleBroken;
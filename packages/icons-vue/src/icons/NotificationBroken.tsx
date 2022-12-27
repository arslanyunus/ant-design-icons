// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBrokenSvg from '@ant-design/icons-svg/lib/asn/NotificationBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBroken: NotificationBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBrokenSvg}></AntdIcon>;
};

NotificationBroken.displayName = 'NotificationBroken';
NotificationBroken.inheritAttrs = false;
export default NotificationBroken;
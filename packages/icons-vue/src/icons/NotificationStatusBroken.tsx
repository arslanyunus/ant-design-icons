// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationStatusBrokenSvg from '@ant-design/icons-svg/lib/asn/NotificationStatusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationStatusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationStatusBroken: NotificationStatusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationStatusBrokenSvg}></AntdIcon>;
};

NotificationStatusBroken.displayName = 'NotificationStatusBroken';
NotificationStatusBroken.inheritAttrs = false;
export default NotificationStatusBroken;
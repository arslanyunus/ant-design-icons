// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBingBrokenSvg from '@ant-design/icons-svg/lib/asn/NotificationBingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBingBroken: NotificationBingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBingBrokenSvg}></AntdIcon>;
};

NotificationBingBroken.displayName = 'NotificationBingBroken';
NotificationBingBroken.inheritAttrs = false;
export default NotificationBingBroken;
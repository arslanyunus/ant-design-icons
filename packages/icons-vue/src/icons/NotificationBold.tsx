// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBoldSvg from '@ant-design/icons-svg/lib/asn/NotificationBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBold: NotificationBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBoldSvg}></AntdIcon>;
};

NotificationBold.displayName = 'NotificationBold';
NotificationBold.inheritAttrs = false;
export default NotificationBold;
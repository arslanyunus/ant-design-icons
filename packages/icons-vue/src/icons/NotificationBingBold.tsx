// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBingBoldSvg from '@ant-design/icons-svg/lib/asn/NotificationBingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBingBold: NotificationBingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBingBoldSvg}></AntdIcon>;
};

NotificationBingBold.displayName = 'NotificationBingBold';
NotificationBingBold.inheritAttrs = false;
export default NotificationBingBold;
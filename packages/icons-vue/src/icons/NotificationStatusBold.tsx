// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationStatusBoldSvg from '@ant-design/icons-svg/lib/asn/NotificationStatusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationStatusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationStatusBold: NotificationStatusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationStatusBoldSvg}></AntdIcon>;
};

NotificationStatusBold.displayName = 'NotificationStatusBold';
NotificationStatusBold.inheritAttrs = false;
export default NotificationStatusBold;
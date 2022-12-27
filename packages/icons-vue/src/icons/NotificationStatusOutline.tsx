// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationStatusOutlineSvg from '@ant-design/icons-svg/lib/asn/NotificationStatusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationStatusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationStatusOutline: NotificationStatusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationStatusOutlineSvg}></AntdIcon>;
};

NotificationStatusOutline.displayName = 'NotificationStatusOutline';
NotificationStatusOutline.inheritAttrs = false;
export default NotificationStatusOutline;
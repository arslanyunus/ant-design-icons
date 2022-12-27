// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationOutlineSvg from '@ant-design/icons-svg/lib/asn/NotificationOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationOutline: NotificationOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationOutlineSvg}></AntdIcon>;
};

NotificationOutline.displayName = 'NotificationOutline';
NotificationOutline.inheritAttrs = false;
export default NotificationOutline;
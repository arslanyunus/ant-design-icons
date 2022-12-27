// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBingOutlineSvg from '@ant-design/icons-svg/lib/asn/NotificationBingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBingOutline: NotificationBingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBingOutlineSvg}></AntdIcon>;
};

NotificationBingOutline.displayName = 'NotificationBingOutline';
NotificationBingOutline.inheritAttrs = false;
export default NotificationBingOutline;
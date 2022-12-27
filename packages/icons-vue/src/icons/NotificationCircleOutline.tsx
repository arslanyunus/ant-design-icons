// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/NotificationCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationCircleOutline: NotificationCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationCircleOutlineSvg}></AntdIcon>;
};

NotificationCircleOutline.displayName = 'NotificationCircleOutline';
NotificationCircleOutline.inheritAttrs = false;
export default NotificationCircleOutline;
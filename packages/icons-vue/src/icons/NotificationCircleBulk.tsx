// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationCircleBulkSvg from '@ant-design/icons-svg/lib/asn/NotificationCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationCircleBulk: NotificationCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationCircleBulkSvg}></AntdIcon>;
};

NotificationCircleBulk.displayName = 'NotificationCircleBulk';
NotificationCircleBulk.inheritAttrs = false;
export default NotificationCircleBulk;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBulkSvg from '@ant-design/icons-svg/lib/asn/NotificationBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBulk: NotificationBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBulkSvg}></AntdIcon>;
};

NotificationBulk.displayName = 'NotificationBulk';
NotificationBulk.inheritAttrs = false;
export default NotificationBulk;
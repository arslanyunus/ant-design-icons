// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBingBulkSvg from '@ant-design/icons-svg/lib/asn/NotificationBingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBingBulk: NotificationBingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBingBulkSvg}></AntdIcon>;
};

NotificationBingBulk.displayName = 'NotificationBingBulk';
NotificationBingBulk.inheritAttrs = false;
export default NotificationBingBulk;
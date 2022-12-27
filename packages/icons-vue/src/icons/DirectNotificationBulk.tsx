// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNotificationBulkSvg from '@ant-design/icons-svg/lib/asn/DirectNotificationBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNotificationBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNotificationBulk: DirectNotificationBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNotificationBulkSvg}></AntdIcon>;
};

DirectNotificationBulk.displayName = 'DirectNotificationBulk';
DirectNotificationBulk.inheritAttrs = false;
export default DirectNotificationBulk;